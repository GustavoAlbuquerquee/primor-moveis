import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Inicializa a IA com a sua chave de API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- COLE SUA BASE DE CONHECIMENTO AQUI ---
const BASE_CONHECIMENTO = `
  PRIMOR MÓVEIS - PERGUNTAS E RESPOSTAS

Base de Conhecimento para o Agente de IA da Primor Móveis 

Sobre a Empresa 

1. Vocês são de BH? Onde fica a empresa? 

    Resposta: Sim, somos uma marcenaria de Belo Horizonte!  Estamos localizados no bairro Sagrada Família. 

2. Qual o horário de funcionamento? Posso visitar? 

    Resposta: Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h. Nós não possuímos um showroom, temos somente o local de produção (a fábrica), caso queira nos visitar, entre em contato para agendarmos o melhor momento para você! 

3. Há quanto tempo a Primor Móveis está no mercado? 

    Resposta: Temos mais de 25 anos de experiência profissional, com uma história de compromisso e mais de 1.900 projetos realizados com sucesso. Nossa trajetória é marcada pela busca constante por design, qualidade e responsabilidade. 

4. Vocês atendem apenas em BH? 

    Resposta: Atendemos principalmente em Belo Horizonte e em toda a região metropolitana. Para projetos em outras localidades, por favor, consulte nossa equipe para avaliarmos a viabilidade. 

5. Vocês fazem projetos residenciais e corporativos? 

    Resposta: Sim, temos vasta experiência nos dois segmentos! Desenvolvemos soluções completas tanto para o conforto do seu lar (residencial), como por exemplo: cozinhas, quartos, salas, quanto para a funcionalidade do seu ambiente de trabalho (corporativo), incluindo escritórios, recepções e lojas. 

 

 

Sobre os Produtos e Materiais 

1. Quais materiais vocês usam? 

    Resposta: Trabalhamos com uma vasta gama de materiais de alta qualidade. Nossa base principal é o MDF de fornecedores renomados, mas nossa expertise se estende a diversos acabamentos como laca, laminados, folha de madeira natural, e a integração com outros materiais como metalon, vidro, espelhos e tecidos para estofados. 

2. Vocês fazem projetos com estruturas em metalon? 

    Resposta: Sim, o metalon é uma de nossas especialidades! Criamos estantes, prateleiras e outras estruturas que combinam a leveza e a resistência do metalon com o aconchego da madeira, resultando em um design industrial e moderno. 

3. Como funciona o acabamento em laca? Posso escolher qualquer cor? 

    Resposta: A laca é um acabamento de pintura de alta resistência e durabilidade, que proporciona uma superfície perfeitamente lisa e uniforme, sem emendas. E sim, uma das grandes vantagens da laca é que você pode escolher praticamente qualquer cor de catálogos como Suvinil ou Coral, permitindo uma personalização total do seu móvel. 

4. Qual a garantia dos móveis? 

    Resposta: Confiamos na qualidade do nosso trabalho e dos materiais que usamos. Oferecemos garantia completa contra defeitos de fabricação, cujos termos e prazos são detalhados em nosso contrato para total transparência e segurança do cliente. 

 

 

 

Sobre o Processo de Trabalho 

1. Como faço para pedir um orçamento? 

    Resposta: É muito simples! Você pode solicitar seu orçamento através do nosso site, na página de Contato, ou nos enviando uma mensagem diretamente em nosso WhatsApp. Para agilizar, nos envie as medidas, mesmo que sejam aproximadas, do ambiente, uma descrição do que você deseja e, se tiver, fotos ou imagens de referência. 

2. Preciso ter um arquiteto para fazer um projeto com vocês? 

    Resposta: Não é obrigatório. Se você já tem um projeto de um arquiteto ou designer, teremos o maior prazer em executá-lo com precisão. Caso não tenha, nossa equipe pode te ajudar a desenvolver o projeto do zero, desde a concepção da ideia até a visualização em 3D. 

3. Qual o prazo médio de entrega? 

    Resposta: O prazo de entrega varia conforme a complexidade e o tamanho de cada projeto. Em média, nossos prazos ficam entre 30 e 60 dias úteis após a aprovação final do projeto. O prazo exato para o seu projeto será sempre especificado em contrato. 

4. Vocês fazem a instalação? 

    Resposta: Sim, com certeza. A instalação é uma etapa fundamental do nosso trabalho e é sempre realizada pela nossa equipe própria e especializada, garantindo que o acabamento e a montagem sigam o mesmo padrão de qualidade da fabricação. 

5. Quais as formas de pagamento? 

    Resposta: Oferecemos formas de pagamento flexíveis para se adequar ao seu planejamento. Geralmente trabalhamos com um sinal na assinatura do contrato e o saldo restante parcelado. Todos os detalhes são conversados e definidos na proposta comercial.
`;

// A função que será chamada pela Umbler
export async function POST(request: Request) {
  try {
    const { message } = await request.json(); // A Umbler enviará a mensagem do cliente aqui

    if (!message) {
      return NextResponse.json(
        { error: "Mensagem não encontrada." },
        { status: 400 }
      );
    }

    // Detecta se o cliente quer falar com um humano
    const querAtendente = /atendente|humano|pessoa|falar com algu[ée]m/i.test(
      message
    );
    if (querAtendente) {
      return NextResponse.json({
        resposta:
          "Entendi! Sem problemas. Vou transferir você para um de nossos especialistas. Um momento, por favor! 😊",
        transbordoHumano: true, // Sinaliza para a Umbler que deve transferir
      });
    }

    // Constrói o prompt para a IA
    const prompt = `
      Você é a assistente virtual da Primor Móveís, uma marcenaria de alto padrão. Seja simpática, profissional e objetiva. Use um tom informal brasileiro.

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

    // Envia o prompt para o Gemini
    const result = await model.generateContent(prompt);
    const resposta = result.response.text();

    // Verifica se a própria IA sugeriu falar com um atendente
    const naoSabe =
      /não tenho essa informação|falar com um atendente|especialista/i.test(
        resposta
      );

    // Retorna a resposta da IA para a Umbler
    return NextResponse.json({
      resposta: resposta,
      transbordoHumano: naoSabe,
    });
  } catch (error) {
    console.error("Erro na API do Chatbot:", error);
    return NextResponse.json(
      {
        resposta:
          "Ops, tive um problema técnico aqui. 🔧 Mas não se preocupe, já estou chamando um de nossos especialistas para te ajudar!",
        transbordoHumano: true,
      },
      { status: 500 }
    );
  }
}
