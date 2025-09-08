import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  console.log("VERIFICANDO CHAVE BLOB:", process.env.BLOB_READ_WRITE_TOKEN);

  if (!filename) {
    return NextResponse.json(
      { error: "Nome do arquivo não encontrado." },
      { status: 400 }
    );
  }

  if (!request.body) {
    return NextResponse.json(
      { error: "Nenhum arquivo para upload." },
      { status: 400 }
    );
  }

  try {
    const blob = await put(filename, request.body, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json(blob);
  } catch (error: any) {
    console.error("Erro no upload para o Vercel Blob:", error);
    return NextResponse.json(
      { error: `Erro ao fazer upload: ${error.message}` },
      { status: 500 }
    );
  }
}
