import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializa o Resend com a chave da sua variável de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extrai os dados do corpo da requisição
    const body = await request.json();
    const { Nome, Email, Mensagem, Telefone } = body;

    // Validação básica para garantir que os campos essenciais não estão vazios
    if (!Nome || !Email || !Mensagem) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 });
    }

    // Envia o e-mail usando o Resend
    const data = await resend.emails.send({
      from: 'Contato Site Primor <onboarding@resend.dev>', // Endereço de envio de teste do Resend
      to: ['faleconosco@primormoveis.com.br'], // SEU E-MAIL para receber a mensagem
      subject: `Novo Contato de ${Nome} - Site Primor Móveis`,
      replyTo: Email, // <-- CORRIGIDO AQUI! De 'reply_to' para 'replyTo'
      html: `
        <h1>Novo pedido de orçamento de ${Nome}</h1>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Telefone:</strong> ${Telefone || 'Não informado'}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${Mensagem.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Retorna sucesso se o e-mail foi enviado
    return NextResponse.json({ message: 'E-mail enviado com sucesso!', data });

  } catch (error) {
    // Retorna um erro se algo der errado
    console.error(error);
    return NextResponse.json({ error: 'Erro ao enviar o e-mail.' }, { status: 500 });
  }
}