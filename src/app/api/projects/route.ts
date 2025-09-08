import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionData {
  isAdmin: boolean;
}

// --- FUNÇÃO PARA BUSCAR TODOS OS PROJETOS (GET) ---
export async function GET() {
  // Segurança: Apenas admins podem ver a lista de projetos
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.SESSION_SECRET as string,
    cookieName: "primor-admin-session",
  });

  if (!session.isAdmin) {
    return new NextResponse(JSON.stringify({ error: "Não autorizado" }), {
      status: 401,
    });
  }

  try {
    const projects = await prisma().project.findMany({
      orderBy: {
        createdAt: "desc", // Mostra os projetos mais recentes primeiro
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return new NextResponse(
      JSON.stringify({ error: "Erro ao buscar os projetos." }),
      { status: 500 }
    );
  }
}

// --- FUNÇÃO PARA CRIAR UM NOVO PROJETO (POST) ---
export async function POST(request: Request) {
  // Segurança: Apenas admins podem criar projetos
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.SESSION_SECRET as string,
    cookieName: "primor-admin-session",
  });

  if (!session.isAdmin) {
    return new NextResponse(JSON.stringify({ error: "Não autorizado" }), {
      status: 401,
    });
  }

  try {
    const body = await request.json();
    const { name, description, category, imageSrc } = body;

    if (!name || !description || !category || !imageSrc) {
      return new NextResponse(
        JSON.stringify({ error: "Todos os campos são obrigatórios." }),
        { status: 400 }
      );
    }

    const newProject = await prisma().project.create({
      data: {
        name,
        description,
        category,
        imageSrc,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    return new NextResponse(
      JSON.stringify({ error: "Erro ao criar o projeto." }),
      { status: 500 }
    );
  }
}
