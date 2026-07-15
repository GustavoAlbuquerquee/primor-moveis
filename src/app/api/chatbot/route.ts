// app/api/chatbot/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

function getContextoAtual() {
  const agora = new Date();
  const diaSemana = agora
    .toLocaleDateString("pt-BR", { weekday: "long", timeZone: "America/Sao_Paulo" })
    .toLowerCase();
  const dataCompleta = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });
  const hora = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
  const diasUteis = ["segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
  const ehDiaUtil = diasUteis.some((d) => diaSemana.includes(d)) || diaSemana.includes("ter");
  const [hh] = hora.split(":").map(Number);
  const dentroDoHorario = hh >= 8 && hh < 18;
  const estaAberto = ehDiaUtil && dentroDoHorario;
  return { dataCompleta, hora, estaAberto, ehDiaUtil };
}

const BASE_CONHECIMENTO = `
  PRIMOR MOVEIS - PERGUNTAS E RESPOSTAS

  # Contato e Localizacao
  - Pergunta: Qual o endereco de voces?
    Resposta: Estamos na Rua Teodomira Diniz Lara, 48 - Sagrada Familia, Belo Horizonte - MG.

  - Pergunta: Qual o WhatsApp ou telefone de voces?
    Resposta: Nosso WhatsApp e (31) 99988-4688. Voce tambem pode falar com a gente por aqui!

  - Pergunta: Qual o e-mail de voces?
    Resposta: Nosso e-mail e faleconosco@primormoveis.com.br.

  - Pergunta: Qual o Instagram de voces?
    Resposta: Nos siga no Instagram: @primormoveisbh. La voce encontra fotos dos nossos projetos!

  - Pergunta: Qual o site de voces?
    Resposta: Nosso site e www.primormoveis.com.br - la voce encontra nosso portfolio completo!

  - Pergunta: Como entro em contato com a Primor?
    Resposta: Voce pode falar pelo WhatsApp (31) 99988-4688, pelo e-mail faleconosco@primormoveis.com.br ou pelo formulario no site www.primormoveis.com.br.

  # Sobre a Empresa
  - Pergunta: Voces sao de BH? Onde fica a empresa?
    Resposta: Sim, somos uma marcenaria de Belo Horizonte! Ficamos na Rua Teodomira Diniz Lara, 48 - Sagrada Familia.

  - Pergunta: Ha quanto tempo a Primor Moveis esta no mercado?
    Resposta: Temos mais de 25 anos de experiencia, com mais de 1.900 projetos realizados com sucesso! Nossa trajetoria e marcada por design, qualidade e responsabilidade.

  - Pergunta: Voces atendem apenas em BH?
    Resposta: Atendemos principalmente Belo Horizonte e a regiao metropolitana. Para projetos em outras cidades, consulte nossa equipe para avaliarmos a viabilidade.

  - Pergunta: Voces fazem projetos residenciais e corporativos?
    Resposta: Sim! Fazemos projetos para residencias (cozinhas, quartos, salas, closets, home office) e para empresas (escritorios, recepcoes, lojas).

  - Pergunta: Voces tem Showroom?
    Resposta: Nao temos showroom, mas voce pode visitar nossa fabrica no Sagrada Familia. Um especialista agenda o melhor horario com voce pelo WhatsApp!

  - Pergunta: A Primor tem CNPJ?
    Resposta: Sim! Somos uma empresa registrada: CNPJ 12.654.132/0001-16.

  - Pergunta: Quem e responsavel pelos projetos da Primor?
    Resposta: Nossa equipe tecnica e liderada pelo Igor Magalhaes, socio-proprietario da empresa.

  - Pergunta: Voces tem avaliacoes no Google?
    Resposta: Temos sim! Pesquise "Primor Moveis Planejados BH" no Google para conferir as avaliacoes dos nossos clientes.

  - Pergunta: Posso visitar a marcenaria?
    Resposta: Pode sim! Um especialista entra em contato pelo WhatsApp para agendar o melhor horario para voce.

  - Pergunta: Voces fazem atendimento noturno?
    Resposta: Sim, podemos agendar visitas ou reunioes virtuais em horarios alternativos. Um especialista verifica a disponibilidade com voce.

  - Pergunta: A Primor Moveis esta contratando?
    Resposta: Estamos sempre de olho em bons profissionais! Informe sua area de interesse para verificarmos se ha vagas abertas.

  - Pergunta: Voces contratam CLT ou prestadores de servico?
    Resposta: Depende da funcao. Temos vagas com carteira assinada e tambem parcerias com autonomos e PJ.

  # Horarios de Funcionamento
  - Pergunta: Qual o horario de funcionamento?
    Resposta: Funcionamos de segunda a sexta-feira, das 8h as 18h. Nao abrimos aos sabados, domingos e feriados.

  - Pergunta: Voces abrem no sabado?
    Resposta: Nao, nosso atendimento e de segunda a sexta, das 8h as 18h. Mas voce pode nos mandar mensagem aqui a qualquer hora que respondemos no proximo dia util!

  - Pergunta: Voces abrem no domingo?
    Resposta: Nao abrimos aos domingos. Nosso horario e segunda a sexta, das 8h as 18h. Mande sua mensagem que retornamos na segunda-feira!

  - Pergunta: Voces funcionam em feriados?
    Resposta: Geralmente nao funcionamos em feriados. Em datas especiais, a equipe avalia a disponibilidade. Nos mande uma mensagem para confirmar!

  - Pergunta: Posso agendar uma visita no final de semana?
    Resposta: As visitas sao agendadas de segunda a sexta, das 8h as 18h. Em casos especiais, um especialista pode verificar disponibilidade para sabado.

  # Produtos e Ambientes
  - Pergunta: Voces fazem cozinha planejada?
    Resposta: Sim! Fazemos cozinhas planejadas completas, com armazens, ilha e acabamentos personalizados.

  - Pergunta: Voces fazem closet?
    Resposta: Sim, fazemos closets sob medida com organizacao inteligente para roupas, sapatos e acessorios!

  - Pergunta: Voces fazem guarda-roupa planejado?
    Resposta: Sim! Guarda-roupas sob medida com o layout que melhor se adapta ao seu quarto e as suas necessidades.

  - Pergunta: Voces fazem painel de TV e rack?
    Resposta: Sim, fazemos paineis de TV, racks e estantes planejadas para sala de estar!

  - Pergunta: Voces fazem home office?
    Resposta: Sim! Criamos home offices completos: mesas, estantes, nichos e organizacao personalizada para voce trabalhar melhor em casa.

  - Pergunta: Voces fazem banheiro planejado?
    Resposta: Sim, fazemos armazens e gabinetes para banheiro sob medida.

  - Pergunta: Voces fazem lareira ou parede com gesso?
    Resposta: Trabalhamos com marcenaria. Para projetos que envolvem gesso ou alvenaria, indicamos parceiros especializados.

  - Pergunta: Voces fazem moveis para area de servico?
    Resposta: Sim! Armazens e bancadas para area de servico tambem fazem parte do nosso portfolio.

  - Pergunta: Voces fazem estante e prateleira?
    Resposta: Sim! Fazemos estantes, prateleiras e nichos em MDF ou com estrutura em metalon.

  - Pergunta: Voces fazem mesa de jantar ou mesa de escritorio?
    Resposta: Fazemos mesas planejadas, incluindo mesas de escritorio e bancadas. Mesas de jantar em madeira macica nao sao nossa especialidade principal, mas consulte a equipe para avaliar.

  # Materiais e Qualidade
  - Pergunta: Quais materiais voces usam?
    Resposta: Trabalhamos com MDFs de alta densidade e acabamentos de marcas como Duratex, Guararapes e Arauco, com ferragens premium.

  - Pergunta: Voces fazem acabamento em laca?
    Resposta: Sim! Produzimos moveis com acabamento em laca fosca ou brilhante e pinturas diversas.

  - Pergunta: Usam dobracas e corrediclas de boa qualidade?
    Resposta: Sim, utilizamos ferragens com amortecimento e garantia das melhores marcas do mercado.

  - Pergunta: Voces instalam iluminacao nos moveis?
    Resposta: Sim, podemos incluir fita de LED e iluminacao decorativa conforme o projeto.

  - Pergunta: Voces fazem projetos com estruturas em metalon?
    Resposta: Sim, o metalon e uma das nossas especialidades! Criamos estantes e estruturas que combinam metalon com madeira, resultando em um design industrial e moderno.

  - Pergunta: Voces removem moveis antigos antes de instalar?
    Resposta: Podemos auxiliar na retirada dos moveis antigos mediante avaliacao previa.

  - Pergunta: Voces dao garantia nos moveis?
    Resposta: Sim! Todos os moveis tem garantia de 2 anos sobre o servico executado e de 3 a 5 anos nas ferragens, conforme o fabricante.

  - Pergunta: Voces fazem reparo em moveis?
    Resposta: Sim, porem precisamos avaliar o movel atraves de fotos e videos para passar um orcamento correto.

  - Pergunta: Voces emitem nota fiscal?
    Resposta: Claro! Emitimos nota fiscal de todos os servicos e produtos.

  - Pergunta: Como limpar o movel sem danificar?
    Resposta: Use apenas pano umido e sabao neutro. Evite alcool, esponja abrasiva e produtos de limpeza agressivos.

  - Pergunta: Por que o MDF inchou?
    Resposta: Isso pode acontecer por contato com umidade excessiva. Nos envie fotos para avaliarmos se e caso de garantia ou manutencao.

  # Processo e Etapas
  - Pergunta: Como funciona o processo do inicio ao fim?
    Resposta: E simples! 1) Voce solicita o orcamento, 2) agendamos uma visita tecnica gratuita, 3) elaboramos o projeto 3D para aprovacao, 4) voce aprova e paga a entrada, 5) produzimos em 30 a 60 dias e 6) entregamos e instalamos no local.

  - Pergunta: Como faco para pedir um orcamento?
    Resposta: Voce pode solicitar pelo WhatsApp (31) 99988-4688, pelo site www.primormoveis.com.br ou aqui mesmo! Envie medidas, fotos e o que deseja fazer.

  - Pergunta: Voces realizam orcamento pelo WhatsApp?
    Resposta: Sim! Pode nos mandar mensagem no (31) 99988-4688, enviar medidas, fotos e tirar todas as suas duvidas.

  - Pergunta: Posso mandar uma planta ou projeto?
    Resposta: Pode sim! Envie a planta, medidas ou fotos do ambiente que te orientamos melhor.

  - Pergunta: Como agendo uma visita?
    Resposta: Um de nossos especialistas entra em contato pelo WhatsApp para confirmar o melhor dia, horario e local para voce. A visita tecnica e gratuita!

  - Pergunta: Voces fazem o projeto 3D?
    Resposta: Sim! Apos o levantamento de medidas, elaboramos o projeto 3D completo para sua aprovacao antes de iniciar a producao.

  - Pergunta: A medicao ou visita tecnica e gratuita?
    Resposta: Sim, a primeira visita tecnica para orcamento e totalmente gratuita!

  - Pergunta: Voces fazem medicao sem projeto de arquiteto?
    Resposta: Sim! Desenvolvemos o projeto internamente, sem precisar de arquiteto.

  - Pergunta: Tenho um projeto de arquiteto, voces executam?
    Resposta: Claro! Nos envie o projeto para elaborarmos um orcamento detalhado.

  - Pergunta: Qual e o prazo medio para envio de orcamento?
    Resposta: Em geral, de 2 a 3 dias apos a visita tecnica, podendo ser antes conforme disponibilidade.

  - Pergunta: Qual o prazo medio de entrega dos moveis?
    Resposta: De 30 a 60 dias apos a aprovacao do projeto e pagamento da entrada.

  - Pergunta: O orcamento inclui entrega e instalacao?
    Resposta: Sim! O valor ja contempla fabricacao, entrega e montagem completa.

  - Pergunta: Voces instalam os eletrodomesticos tambem?
    Resposta: Instalamos em casos simples. Para instalacoes mais complexas, indicamos parceiros especializados.

  - Pergunta: Quantos dias leva a montagem?
    Resposta: Em media, de 1 a 3 dias por ambiente, dependendo da complexidade do projeto.

  - Pergunta: Voces atendem construtoras ou arquitetos?
    Resposta: Sim! Fazemos parcerias com arquitetos, decoradores e construtoras, com comissao por indicacao ou acompanhamento tecnico.

  - Pergunta: Posso ver fotos de trabalhos de voces?
    Resposta: Claro! Confira nosso portfolio no site www.primormoveis.com.br e no Instagram @primormoveisbh.

  - Pergunta: Posso acompanhar o processo de producao?
    Resposta: Pode sim! Enviamos fotos e videos da fabricacao para voce acompanhar tudo de pertinho.

  - Pergunta: Meu movel ainda nao foi entregue, o que aconteceu?
    Resposta: Nos informe o numero do pedido e verificamos com a producao para te dar um prazo atualizado!

  - Pergunta: O movel chegou com risco ou dano?
    Resposta: Nos envie uma foto e o numero do pedido - resolvemos o quanto antes!

  - Pergunta: A equipe de montagem atrasou, e agora?
    Resposta: Pedimos desculpas pelo inconveniente! Nossa equipe de logistica entra em contato para informar o novo horario.

  - Pergunta: Posso retirar os moveis na marcenaria?
    Resposta: Sim! Basta combinarmos a data e voce providenciar o transporte adequado.

  # Pagamentos
  - Pergunta: Quais sao as formas de pagamento?
    Resposta: Aceitamos Pix, transferencia bancaria, boleto e cartao de credito. O pagamento padrao e 50% de entrada e 50% na entrega, ou parcelado em ate 6x sem juros no cartao.

  - Pergunta: Posso pagar parte no cartao e parte em transferencia?
    Resposta: Pode sim! Adaptamos as formas de pagamento conforme sua preferencia.

  - Pergunta: Voces parcelam em mais vezes?
    Resposta: Sim! Parcelamos de 7 a 10x no cartao de credito, com os juros da operadora.

  - Pergunta: A vista tem desconto?
    Resposta: Sim! Pagamentos a vista tem desconto de ate 7%.

  - Pergunta: Voces aceitam Pix?
    Resposta: Sim, aceitamos Pix, transferencia, boleto e cartao de credito.

  - Pergunta: O orcamento pode ser enviado por e-mail?
    Resposta: Pode sim! Basta informar seu e-mail e enviamos em formato de planilha e PDF.

  - Pergunta: Preciso pagar tudo na assinatura do contrato?
    Resposta: Nao! O padrao e 50% de entrada e os 50% restantes na entrega do movel. Outras condicoes podem ser negociadas.
`;

// Suporta GET, POST e OPTIONS
export async function GET(request: Request) {
  return handleRequest(request, "GET");
}

export async function POST(request: Request) {
  return handleRequest(request, "POST");
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

async function handleRequest(request: Request, method: string) {
  const requestId = `CHAT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  console.log("\n========================================");
  console.log(`[${requestId}] INICIO - ${new Date().toISOString()}`);
  console.log(`[${requestId}] Metodo: ${method}`);
  console.log(`[${requestId}] URL: ${request.url}`);
  console.log("========================================");

  try {
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });
    console.log(`[${requestId}] Headers:`, JSON.stringify(headers, null, 2));

    let message = "";
    let bodyCompleto: unknown = null;

    if (method === "POST") {
      try {
        const bodyText = await request.text();
        console.log(`[${requestId}] Body raw:`, bodyText);

        bodyCompleto = JSON.parse(bodyText);
        console.log(`[${requestId}] Body parsed:`, JSON.stringify(bodyCompleto, null, 2));

        const body = bodyCompleto as Record<string, string>;
        message =
          body.message ||
          body.text ||
          body.pergunta ||
          body.question ||
          body.mensagem ||
          body.msg ||
          "";
      } catch (e) {
        console.error(`[${requestId}] Erro ao parsear JSON:`, e);
        return NextResponse.json(
          {
            error: "Formato de requisicao invalido",
            detalhes: e instanceof Error ? e.message : "Erro desconhecido",
            request_id: requestId,
          },
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    } else {
      const url = new URL(request.url);
      message =
        url.searchParams.get("message") ||
        url.searchParams.get("pergunta") ||
        url.searchParams.get("question") ||
        "";
      console.log(`[${requestId}] Query params:`, Object.fromEntries(url.searchParams));
    }

    console.log(`[${requestId}] Mensagem extraida: "${message}"`);

    if (!message || message.trim() === "") {
      console.log(`[${requestId}] Mensagem vazia`);
      return NextResponse.json(
        {
          error: "Mensagem nao encontrada.",
          exemplo_body: { message: "Quanto custa uma cozinha?" },
          body_recebido: bodyCompleto,
          request_id: requestId,
        },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const querAtendente = /atendente|humano|pessoa|falar com algu[ee]m/i.test(message);

    if (querAtendente) {
      console.log(`[${requestId}] Cliente quer falar com atendente - transbordo`);
      return NextResponse.json(
        {
          resposta: "Entendi! Sem problemas. Vou transferir voce para um de nossos especialistas. Um momento, por favor!",
          transbordoHumano: "true",
          metadata: { request_id: requestId, timestamp: new Date().toISOString() },
        },
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log(`[${requestId}] Chamando Gemini...`);
    const startTime = Date.now();

    const { dataCompleta, hora, estaAberto, ehDiaUtil } = getContextoAtual();
    const statusFuncionamento = estaAberto
      ? `Estamos ABERTOS agora (${hora}).`
      : ehDiaUtil
      ? `Estamos FECHADOS no momento - nosso horario e ate as 18h. Hoje e ${dataCompleta}, ${hora}.`
      : `Hoje e ${dataCompleta} e nao funcionamos aos finais de semana/feriados. Retornamos na proxima segunda-feira as 8h.`;

    const prompt = `
      Voce e a assistente virtual da Primor Moveis, uma marcenaria de alto padrao. Seja simpatica, profissional e objetiva. Use um tom informal brasileiro.

      CONTEXTO ATUAL: Hoje e ${dataCompleta}, sao ${hora} (horario de Brasilia). ${statusFuncionamento}
      HORARIO DE FUNCIONAMENTO: segunda a sexta-feira, das 8h as 18h. Nao abrimos aos sabados, domingos e feriados.

      REGRAS IMPORTANTES:
      1. Responda APENAS com informacoes da base de conhecimento abaixo ou do CONTEXTO ATUAL acima. Nao invente nada.
      2. Se a resposta nao estiver na base nem no contexto atual, responda exatamente: "NAO_SEI"
      3. Mantenha as respostas curtas e claras (maximo 3 frases).
      4. Use emojis moderadamente para um toque amigavel.

      === BASE DE CONHECIMENTO ===
      ${BASE_CONHECIMENTO}
      ===========================

      Pergunta do cliente: "${message}"

      Resposta:
    `;

    const result = await model.generateContent(prompt);
    const resposta = result.response.text();

    const responseTime = Date.now() - startTime;
    console.log(`[${requestId}] Resposta gerada em ${responseTime}ms`);
    console.log(`[${requestId}] Resposta: "${resposta.substring(0, 150)}..."`);

    const naoSabe = resposta.trim() === "NAO_SEI";
    if (naoSabe) {
      console.log(`[${requestId}] IA nao soube responder - sugerindo transbordo`);
    }

    console.log(`[${requestId}] FIM - Sucesso`);
    console.log("========================================\n");

    return NextResponse.json(
      {
        resposta,
        transbordoHumano: naoSabe ? "true" : "false",
        metadata: {
          request_id: requestId,
          response_time_ms: responseTime,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(`[${requestId}] ERRO:`, error);
    console.log(`[${requestId}] FIM - Erro`);
    console.log("========================================\n");

    return NextResponse.json(
      {
        resposta: "Ops, tive um problema tecnico aqui. Mas nao se preocupe, ja estou chamando um de nossos especialistas para te ajudar!",
        transbordoHumano: "true",
        metadata: {
          request_id: requestId,
          timestamp: new Date().toISOString(),
          error: error instanceof Error ? error.message : "Erro desconhecido",
        },
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
