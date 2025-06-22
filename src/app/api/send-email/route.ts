import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Agora esperamos receber 'fileUrls' como um array de strings
    const { Nome, Email, Mensagem, Telefone, fileUrls } = body;

    if (!Nome || !Email || !Mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando." },
        { status: 400 }
      );
    }

    // Gera uma lista de links em HTML se houver anexos
    let attachmentsHtml = "";
    if (fileUrls && fileUrls.length > 0) {
      const links = fileUrls
        .map(
          (url: string, index: number) =>
            `<li><a href="${url}" target="_blank" rel="noopener noreferrer">Anexo ${index + 1}</a></li>`
        )
        .join("");
      attachmentsHtml = `
        <p><strong>Anexos:</strong></p>
        <ul>${links}</ul>
      `;
    }

    const data = await resend.emails.send({
      from: "Contato Primor Móveis <contato@primormoveis.com.br>",
      to: ["faleconosco@primormoveis.com.br"],
      subject: `Novo Contato de ${Nome} - Site Primor Móveis`,
      replyTo: Email,
      html: `
        <h1>Novo pedido de orçamento de ${Nome}</h1>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Telefone:</strong> ${Telefone || "Não informado"}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${Mensagem.replace(/\n/g, "<br>")}</p>
        ${attachmentsHtml}
      `,
    });

    return NextResponse.json({ message: "E-mail enviado com sucesso!", data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
