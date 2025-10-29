// app/api/chatbot/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const BASE_CONHECIMENTO = `
  PRIMOR MÓVEIS - PERGUNTAS E RESPOSTAS

  # Sobre a Empresa
  - Pergunta: Vocês são de BH? Onde fica a empresa?
    Resposta: Sim, somos uma marcenaria de Belo Horizonte! Estamos localizados no bairro Sagrada Família.

  - Pergunta: Qual o horário de funcionamento? Posso visitar?
    Resposta: Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h. Nós não possuímos um showroom, temos somente o local de produção (a fábrica), caso queira nos visitar, entre em contato para agendarmos o melhor momento para você!

  - Pergunta: Há quanto tempo a Primor Móveis está no mercado?
    Resposta: Temos mais de 25 anos de experiência profissional, com uma história de compromisso e mais de 1.900 projetos realizados com sucesso. Nossa trajetória é marcada pela busca constante por design, qualidade e responsabilidade.

  - Pergunta: Vocês atendem apenas em BH?
    Resposta: Atendemos principalmente em Belo Horizonte e em toda a região metropolitana. Para projetos em outras localidades, por favor, consulte nossa equipe para avaliarmos a viabilidade.

  - Pergunta: Vocês fazem projetos residenciais e corporativos?
    Resposta: Sim, temos vasta experiência nos dois segmentos! Desenvolvemos soluções completas tanto para o conforto do seu lar (residencial), como por exemplo: cozinhas, quartos, salas, quanto para a funcionalidade do seu ambiente de trabalho (corporativo), incluindo escritórios, recepções e lojas.

  - Pergunta: Vocês atendem apenas em BH ou atendem outras cidades?
    Resposta: Atendemos Belo Horizonte e região metropolitana. Trabalhos fora de BH são avaliados conforme o projeto.

  - Pergunta: Vocês têm Showroom?
    Resposta: Somos marcenaria própria com o nosso espaço de produção, porém não temos showroom. Caso queira fazer uma visita aqui na fábrica, basta agendar um horário no nosso atendimento aqui no WhatsApp.

  - Pergunta: Qual o horário de atendimento ou que posso marcar uma visita para orçamento?
    Resposta: Segunda a sexta, das 8h às 18h. Sábados até meio-dia, conforme agendamento. Podemos verificar possibilidade de atendimento em outros horários.

  - Pergunta: A Primor tem CNPJ e endereço fixo?
    Resposta: Sim, somos uma empresa registrada (CNPJ 12.654.132/0001-16) e nossa marcenaria fica no bairro Sagrada Família, em Belo Horizonte.

  - Pergunta: Quem é responsável pelos projetos da Primor?
    Resposta: Nossa equipe técnica é liderada pelo Igor Magalhães, sócio-proprietário da empresa.

  - Pergunta: Vocês têm avaliações no Google?
    Resposta: Temos sim! É só procurar “Primor Móveis Planejados BH” e conferir as avaliações dos nossos clientes.

  - Pergunta: Posso visitar a marcenaria?
    Resposta: Pode sim! Basta agendar uma visita pra te mostrarmos nosso processo de produção.

  - Pergunta: Vocês fazem atendimento noturno?
    Resposta: Podemos agendar reuniões virtuais em horários alternativos, ou visita se for necessário.

  - Pergunta: A Primor Móveis está contratando no momento?
    Resposta: Estamos sempre de olho em bons profissionais! Informe sua área de interesse pra verificarmos se há vagas abertas.

  - Pergunta: Vocês contratam CLT ou prestadores de serviço?
    Resposta: Depende da função. Temos vagas com carteira assinada e também parcerias com autônomos e PJ.

  # Sobre os Produtos e Materiais
  - Pergunta: Quais materiais vocês usam?
    Resposta: Trabalhamos com MDFs de alta densidade, ferragens premium e acabamentos de marcas como Duratex, Guararapes e Arauco.

  - Pergunta: Vocês fazem acabamento em laca?
    Resposta: Sim, também produzimos móveis com acabamento em laca fosca ou brilhante e pinturas.

  - Pergunta: Usam dobradiças e corrediças de boa qualidade?
    Resposta: Sim, utilizamos ferragens com amortecimento e garantia das melhores marcas.

  - Pergunta: Vocês instalam iluminação nos móveis?
    Resposta: Sim, podemos incluir fita de LED e iluminação decorativa conforme o projeto.

  - Pergunta: Vocês fazem projetos com estruturas em metalon?
    Resposta: Sim, o metalon é uma de nossas especialidades! Criamos estantes, prateleiras e outras estruturas que combinam a leveza e a resistência do metalon com o aconchego da madeira, resultando em um design industrial e moderno.

  - Pergunta: Vocês removem móveis antigos?
    Resposta: Podemos auxiliar na retirada mediante avaliação prévia.

  - Pergunta: Vocês dão garantia nos móveis?
    Resposta: Sim, todos os móveis têm garantia de 2 anos sobre o serviço executado.

  - Pergunta: Vocês dão garantia nas ferragens e corrediças?
    Resposta: Garantia de acordo com o fabricante, geralmente de 3 a 5 anos.

  - Pergunta: Vocês fazem reparo em móveis?
    Resposta: Sim, porém precisamos avaliar o móvel através de fotos e vídeos para passar um orçamento correto.

  - Pergunta: Vocês emitem nota fiscal?
    Resposta: Claro! Emitimos nota fiscal de todos os serviços e produtos.

  - Pergunta: Como limpar o móvel sem danificar?
    Resposta: Use apenas pano úmido e sabão neutro. Evite álcool, esponja ou produtos abrasivos.

  - Pergunta: Por que o MDF inchou?
    Resposta: Isso pode acontecer por contato com umidade. Avaliamos se o caso é de garantia ou manutenção.

  # Sobre o Processo de Trabalho
  - Pergunta: Como faço para pedir um orçamento?
    Resposta: Você pode solicitar seu orçamento pelo site ou WhatsApp. Envie medidas, fotos e uma breve descrição do que deseja.

  - Pergunta: Vocês realizam orçamento pelo WhatsApp mesmo?
    Resposta: Sim, você pode conversar conosco por aqui, enviar medidas, fotos e tirar dúvidas.

  - Pergunta: Posso mandar uma planta ou projeto por aqui?
    Resposta: Pode sim! Envie a planta, medidas ou fotos do ambiente, assim conseguimos te orientar melhor.

  - Pergunta: Como agendo uma visita?
    Resposta: Basta informar o bairro e a disponibilidade. Confirmaremos o dia e horário conforme nossa agenda.

  - Pergunta: Vocês fazem o projeto 3D?
    Resposta: Sim! Durante o processo de contratação e levantamento de medidas, elaboramos o projeto 3D para aprovação.

  - Pergunta: A medição é gratuita?
    Resposta: A primeira visita técnica para orçar é gratuita, de acordo com disponibilidade de equipe e horário.

  - Pergunta: Vocês fazem medição sem projeto de arquiteto?
    Resposta: Sim, podemos desenvolver o projeto internamente.

  - Pergunta: Tenho um projeto pronto, vocês podem fazer um orçamento?
    Resposta: Claro! Pode nos enviar o projeto para orçamento detalhado.

  - Pergunta: Qual é o prazo médio para envio de orçamento?
    Resposta: Em geral, de 2 a 3 dias, podendo ser antes conforme disponibilidade.

  - Pergunta: Vocês fazem o projeto?
    Resposta: Sim, fazemos o esboço inicial do móvel e, se desejar, temos arquitetas e decoradoras parceiras para o projeto completo.

  - Pergunta: Qual o prazo médio de entrega?
    Resposta: De 30 a 60 dias após aprovação do projeto e pagamento da entrada.

  - Pergunta: O orçamento inclui instalação?
    Resposta: Sim, o valor já contempla fabricação, entrega e montagem.

  - Pergunta: Vocês instalam os eletrodomésticos também?
    Resposta: Instalamos apenas em casos simples, mas indicamos parceiros para instalação completa.

  - Pergunta: Quantos dias leva a montagem?
    Resposta: Em média, 1 a 3 dias por ambiente.

  - Pergunta: Vocês atendem construtoras ou arquitetos?
    Resposta: Sim, fazemos parcerias com arquitetos, decoradores e construtoras.

  - Pergunta: Como funciona a parceria com arquitetos?
    Resposta: Trabalhamos com comissão por indicação ou acompanhamento técnico do projeto.

  - Pergunta: Posso ver fotos de trabalhos de vocês?
    Resposta: Claro! Temos portfólio no site www.primormoveis.com.br e no Instagram @primormoveisbh.

  - Pergunta: Posso acompanhar o processo de produção?
    Resposta: Pode sim! Podemos te mandar fotos e vídeos da fabricação.

  - Pergunta: Meu móvel ainda não foi entregue, o que aconteceu?
    Resposta: Verificamos com a produção e informamos o novo prazo atualizado.

  - Pergunta: O móvel chegou com risco ou dano?
    Resposta: Envie uma foto e o número do pedido. Resolveremos o quanto antes.

  - Pergunta: A equipe de montagem atrasou, e agora?
    Resposta: Pedimos desculpas! Nossa equipe de logística te atualiza sobre o novo horário.

  - Pergunta: Posso retirar os móveis na marcenaria?
    Resposta: Sim, desde que combinemos a data e o transporte.

  # Pagamentos
  - Pergunta: Quais são as formas de pagamento?
    Resposta: Normalmente 50% de entrada e 50% na entrega, ou parcelado no cartão em até 6x sem juros. Outras opções podem ser combinadas.

  - Pergunta: Posso pagar parte no cartão e parte em transferência?
    Resposta: Pode sim! Adaptamos conforme sua preferência.

  - Pergunta: Vocês parcelam em mais vezes?
    Resposta: Sim, de 7 a 10x no cartão, com juros da operadora.

  - Pergunta: À vista tem algum desconto?
    Resposta: Sim, pagamentos à vista têm condições especiais, com desconto de até 7%.

  - Pergunta: Vocês aceitam pagamento via Pix?
    Resposta: Sim, aceitamos Pix, transferência, boleto e cartão.

  - Pergunta: O orçamento pode ser enviado por e-mail?
    Resposta: Pode sim, basta informar o e-mail e enviamos em formato de planilha e PDF.
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

  console.log("\n🤖========================================");
  console.log(`[${requestId}] INÍCIO - ${new Date().toISOString()}`);
  console.log(`[${requestId}] Método: ${method}`);
  console.log(`[${requestId}] URL: ${request.url}`);
  console.log("========================================");

  try {
    // Log de headers recebidos
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });
    console.log(`[${requestId}] Headers:`, JSON.stringify(headers, null, 2));

    // Captura a mensagem do usuário
    let message = "";
    let bodyCompleto: any = null;

    if (method === "POST") {
      try {
        const bodyText = await request.text();
        console.log(`[${requestId}] Body raw:`, bodyText);

        bodyCompleto = JSON.parse(bodyText);
        console.log(
          `[${requestId}] Body parsed:`,
          JSON.stringify(bodyCompleto, null, 2)
        );

        // Tenta diferentes formatos possíveis que a Umbler pode enviar
        message =
          bodyCompleto.message ||
          bodyCompleto.text ||
          bodyCompleto.pergunta ||
          bodyCompleto.question ||
          bodyCompleto.mensagem ||
          bodyCompleto.msg ||
          "";
      } catch (e) {
        console.error(`[${requestId}] Erro ao parsear JSON:`, e);
        return NextResponse.json(
          {
            error: "Formato de requisição inválido",
            detalhes: e instanceof Error ? e.message : "Erro desconhecido",
            request_id: requestId,
          },
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      // GET - pega da query string
      const url = new URL(request.url);
      message =
        url.searchParams.get("message") ||
        url.searchParams.get("pergunta") ||
        url.searchParams.get("question") ||
        "";
      console.log(
        `[${requestId}] Query params:`,
        Object.fromEntries(url.searchParams)
      );
    }

    console.log(`[${requestId}] Mensagem extraída: "${message}"`);

    // Valida se tem mensagem
    if (!message || message.trim() === "") {
      console.log(`[${requestId}] ⚠️ Mensagem vazia`);
      return NextResponse.json(
        {
          error: "Mensagem não encontrada.",
          exemplo_body: { message: "Quanto custa uma cozinha?" },
          body_recebido: bodyCompleto,
          request_id: requestId,
        },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Verifica se quer falar com atendente
    console.log(`[${requestId}] Verificando se quer atendente...`);
    const querAtendente = /atendente|humano|pessoa|falar com algu[ée]m/i.test(
      message
    );

    if (querAtendente) {
      console.log(`[${requestId}] ✅ Cliente quer falar com atendente`);
      console.log(`[${requestId}] FIM - Transbordo para humano`);
      console.log("========================================\n");

      return NextResponse.json(
        {
          resposta:
            "Entendi! Sem problemas. Vou transferir você para um de nossos especialistas. Um momento, por favor! 😊",
          transbordoHumano: "true", // <-- MUDANÇA #1 (de true para "true")
          metadata: {
            request_id: requestId,
            timestamp: new Date().toISOString(),
          },
        },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Chama o Gemini
    console.log(`[${requestId}] 🧠 Chamando Gemini...`);
    const startTime = Date.now();

    const prompt = `
      Você é a assistente virtual da Primor Móveis, uma marcenaria de alto padrão. Seja simpática, profissional e objetiva. Use um tom informal brasileiro.

      REGRAS IMPORTANTES:
      1. Responda APENAS com informações da base de conhecimento abaixo. Não invente nada.
      2. Se a resposta exata não estiver na base, responda exatamente: "NAO_SEI"
      3. Mantenha as respostas curtas e claras (máximo 3 frases).
      4. Use emojis moderadamente para um toque amigável 🪵✨.
      
      === BASE DE CONHECIMENTO ===
      ${BASE_CONHECIMENTO}
      ===========================

      Pergunta do cliente: "${message}"

      Resposta:
    `;

    const result = await model.generateContent(prompt);
    const resposta = result.response.text();

    const responseTime = Date.now() - startTime;
    console.log(`[${requestId}] ⚡ Resposta gerada em ${responseTime}ms`);
    console.log(
      `[${requestId}] 💬 Resposta: "${resposta.substring(0, 150)}..."`
    );

    // Verifica se a IA não sabe a resposta
    // const naoSabe = /não tenho essa informação|falar com um atendente|especialista/i.test(resposta); // <-- LÓGICA ANTIGA

    // MUDANÇA #2: Lógica correta para verificar a resposta "NAO_SEI"
    const naoSabe = resposta.trim() === "NAO_SEI";

    if (naoSabe) {
      console.log(
        `[${requestId}] ⚠️ IA não soube responder - sugerindo transbordo`
      );
    }

    console.log("========================================");
    console.log(`[${requestId}] FIM - Sucesso ✅`);
    console.log("========================================\n");

    return NextResponse.json(
      {
        resposta,
        // MUDANÇA #3: Converte o booleano 'naoSabe' para string
        transbordoHumano: naoSabe ? "true" : "false",
        metadata: {
          request_id: requestId,
          response_time_ms: responseTime,
          timestamp: new Date().toISOString(),
        },
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(`[${requestId}] ❌ ERRO:`, error);
    console.log("========================================");
    console.log(`[${requestId}] FIM - Erro`);
    console.log("========================================\n");

    return NextResponse.json(
      {
        resposta:
          "Ops, tive um problema técnico aqui. 🔧 Mas não se preocupe, já estou chamando um de nossos especialistas para te ajudar!",
        transbordoHumano: "true", // <-- MUDANÇA #4 (de true para "true")
        metadata: {
          request_id: requestId,
          timestamp: new Date().toISOString(),
          error: error instanceof Error ? error.message : "Erro desconhecido",
        },
      },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
