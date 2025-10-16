// app/api/teste-simples/route.ts
// Endpoint ultra-simples para testar se a Umbler consegue fazer chamadas HTTP
// Este endpoint responde instantaneamente para testar se o problema é timeout

import { NextResponse } from "next/server";

// Aceita qualquer método HTTP
export async function GET(request: Request) {
  return handleRequest(request, "GET");
}

export async function POST(request: Request) {
  return handleRequest(request, "POST");
}

export async function PUT(request: Request) {
  return handleRequest(request, "PUT");
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

async function handleRequest(request: Request, method: string) {
  console.log(
    `[TESTE] Requisição ${method} recebida em:`,
    new Date().toISOString()
  );

  try {
    // Tenta ler o body se existir
    let body = null;
    try {
      body = await request.json();
    } catch (e) {
      console.log("[TESTE] Sem body JSON");
    }

    // Log de headers
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });

    console.log("[TESTE] Headers recebidos:", headers);
    console.log("[TESTE] Body recebido:", body);

    // Resposta super simples
    const response = {
      sucesso: true,
      mensagem: "Endpoint de teste funcionando!",
      timestamp: new Date().toISOString(),
      metodo: method,
      dados_recebidos: body,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("[TESTE] Erro:", error);

    return NextResponse.json(
      {
        sucesso: false,
        erro: "Erro no processamento",
        detalhes: error instanceof Error ? error.message : "Erro desconhecido",
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
