// app/api/chatbot/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa a IA com a sua chave de API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
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

  # Sobre os Produtos e Materiais
  - Pergunta: Quais materiais vocês usam?
    Resposta: Trabalhamos com uma vasta gama de materiais de alta qualidade. Nossa base principal é o MDF de fornecedores renomados, mas nossa expertise se estende a diversos acabamentos como laca, laminados, folha de madeira natural, e a integração com outros materiais como metalon, vidro, espelhos e tecidos para estofados.

  - Pergunta: Vocês fazem projetos com estruturas em metalon?
    Resposta: Sim, o metalon é uma de nossas especialidades! Criamos estantes, prateleiras e outras estruturas que combinam a leveza e a resistência do metalon com o aconchego da madeira, resultando em um design industrial e moderno.

  - Pergunta: Como funciona o acabamento em laca? Posso escolher qualquer cor?
    Resposta: A laca é um acabamento de pintura de alta resistência e durabilidade, que proporciona uma superfície perfeitamente lisa e uniforme, sem emendas. E sim, uma das grandes vantagens da laca é que você pode escolher praticamente qualquer cor de catálogos como Suvinil ou Coral, permitindo uma personalização total do seu móvel.

  - Pergunta: Qual a garantia dos móveis?
    Resposta: Confiamos na qualidade do nosso trabalho e dos materiais que usamos. Oferecemos garantia completa contra defeitos de fabricação, cujos termos e prazos são detalhados em nosso contrato para total transparência e segurança do cliente.

  # Sobre o Processo de Trabalho
  - Pergunta: Como faço para pedir um orçamento?
    Resposta: É muito simples! Você pode solicitar seu orçamento através do nosso site, na página de Contato, ou nos enviando uma mensagem diretamente em nosso WhatsApp. Para agilizar, nos envie as medidas, mesmo que sejam aproximadas, do ambiente, uma descrição do que você deseja e, se tiver, fotos ou imagens de referência.

  - Pergunta: Preciso ter um arquiteto para fazer um projeto com vocês?
    Resposta: Não é obrigatório. Se você já tem um projeto de um arquiteto ou designer, teremos o maior prazer em executá-lo com precisão. Caso não tenha, nossa equipe pode te ajudar a desenvolver o projeto do zero, desde a concepção da ideia até a visualização em 3D.

  - Pergunta: Qual o prazo médio de entrega?
    Resposta: O prazo de entrega varia conforme a complexidade e o tamanho de cada projeto. Em média, nossos prazos ficam entre 30 e 60 dias úteis após a aprovação final do projeto. O prazo exato para o seu projeto será sempre especificado em contrato.

  - Pergunta: Vocês fazem a instalação?
    Resposta: Sim, com certeza. A instalação é uma etapa fundamental do nosso trabalho e é sempre realizada pela nossa equipe própria e especializada, garantindo que o acabamento e a montagem sigam o mesmo padrão de qualidade da fabricação.

  - Pergunta: Quais as formas de pagamento?
    Resposta: Oferecemos formas de pagamento flexíveis para se adequar ao seu planejamento. Geralmente trabalhamos com um sinal na assinatura do contrato e o saldo restante parcelado. Todos os detalhes são conversados e definidos na proposta comercial.
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
          { status: 400 }
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
        { status: 400 }
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

      return NextResponse.json({
        resposta:
          "Entendi! Sem problemas. Vou transferir você para um de nossos especialistas. Um momento, por favor! 😊",
        transbordoHumano: true,
        metadata: {
          request_id: requestId,
          timestamp: new Date().toISOString(),
        },
      });
    }

    // Chama o Gemini
    console.log(`[${requestId}] 🧠 Chamando Gemini...`);
    const startTime = Date.now();

    const prompt = `
      Você é a assistente virtual da Primor Móveis, uma marcenaria de alto padrão. Seja simpática, profissional e objetiva. Use um tom informal brasileiro.

      REGRAS IMPORTANTES:
      1. Responda APENAS com informações da base de conhecimento abaixo. Não invente nada.
      2. Se a resposta exata não estiver na base, responda exatamente: "Não tenho essa informação no momento, mas posso te transferir para um de nossos especialistas. Deseja falar com um atendente?"
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
    const naoSabe =
      /não tenho essa informação|falar com um atendente|especialista/i.test(
        resposta
      );

    if (naoSabe) {
      console.log(
        `[${requestId}] ⚠️ IA não soube responder - sugerindo transbordo`
      );
    }

    console.log("========================================");
    console.log(`[${requestId}] FIM - Sucesso ✅`);
    console.log("========================================\n");

    return NextResponse.json({
      resposta,
      transbordoHumano: naoSabe,
      metadata: {
        request_id: requestId,
        response_time_ms: responseTime,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(`[${requestId}] ❌ ERRO:`, error);
    console.log("========================================");
    console.log(`[${requestId}] FIM - Erro`);
    console.log("========================================\n");

    return NextResponse.json(
      {
        resposta:
          "Ops, tive um problema técnico aqui. 🔧 Mas não se preocupe, já estou chamando um de nossos especialistas para te ajudar!",
        transbordoHumano: true,
        metadata: {
          request_id: requestId,
          timestamp: new Date().toISOString(),
          error: error instanceof Error ? error.message : "Erro desconhecido",
        },
      },
      { status: 500 }
    );
  }
}
