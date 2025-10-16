// app/api/proxy-debug/route.ts
// Proxy que registra tudo e repassa para sua API original

import { NextResponse } from "next/server";

const API_ORIGINAL = "https://primormoveis.com.br/api/chatbot";

export async function GET(request: Request) {
  return handleProxy(request, "GET");
}

export async function POST(request: Request) {
  return handleProxy(request, "POST");
}

export async function PUT(request: Request) {
  return handleProxy(request, "PUT");
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

async function handleProxy(request: Request, method: string) {
  const requestId = `REQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  console.log("\n========================================");
  console.log(`[PROXY ${requestId}] INÍCIO - ${new Date().toISOString()}`);
  console.log("========================================");

  try {
    // Captura URL completa
    const url = new URL(request.url);
    console.log(`[PROXY ${requestId}] URL:`, url.toString());
    console.log(`[PROXY ${requestId}] Método:`, method);
    console.log(
      `[PROXY ${requestId}] Query Params:`,
      Object.fromEntries(url.searchParams)
    );

    // Captura headers
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });
    console.log(
      `[PROXY ${requestId}] Headers:`,
      JSON.stringify(headers, null, 2)
    );

    // Captura body
    let body = null;
    let bodyText = "";
    try {
      bodyText = await request.text();
      if (bodyText) {
        body = JSON.parse(bodyText);
        console.log(
          `[PROXY ${requestId}] Body (JSON):`,
          JSON.stringify(body, null, 2)
        );
      } else {
        console.log(`[PROXY ${requestId}] Body: vazio`);
      }
    } catch (e) {
      console.log(`[PROXY ${requestId}] Body (texto/não-JSON):`, bodyText);
    }

    // Faz a chamada para a API original
    console.log(`[PROXY ${requestId}] Enviando para API original...`);
    const startTime = Date.now();

    const apiResponse = await fetch(API_ORIGINAL, {
      method: "POST", // Força POST para a API original
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body || {}),
    });

    const responseTime = Date.now() - startTime;
    console.log(`[PROXY ${requestId}] Resposta recebida em ${responseTime}ms`);
    console.log(`[PROXY ${requestId}] Status:`, apiResponse.status);

    // Captura resposta
    const responseText = await apiResponse.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
      console.log(
        `[PROXY ${requestId}] Resposta (JSON):`,
        JSON.stringify(responseData, null, 2)
      );
    } catch (e) {
      console.log(`[PROXY ${requestId}] Resposta (texto):`, responseText);
      responseData = { texto: responseText };
    }

    console.log("========================================");
    console.log(`[PROXY ${requestId}] FIM - Sucesso`);
    console.log("========================================\n");

    // Retorna a resposta
    return NextResponse.json(
      {
        sucesso: true,
        proxy_info: {
          request_id: requestId,
          response_time_ms: responseTime,
        },
        resposta_original: responseData,
      },
      {
        status: apiResponse.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error(`[PROXY ${requestId}] ERRO:`, error);
    console.log("========================================");
    console.log(`[PROXY ${requestId}] FIM - Erro`);
    console.log("========================================\n");

    return NextResponse.json(
      {
        sucesso: false,
        proxy_info: {
          request_id: requestId,
        },
        erro: "Erro no proxy",
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
