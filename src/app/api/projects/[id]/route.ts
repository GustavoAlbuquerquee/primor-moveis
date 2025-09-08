import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionData {
  isAdmin: boolean;
}

// --- NOVA FUNÇÃO PARA EDITAR/ATUALIZAR UM PROJETO (PUT) ---
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Segurança: Apenas admins podem editar
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
    const { id } = await params;
    const body = await request.json();
    const { name, description, category, imageSrc } = body;

    // Validação dos dados recebidos
    if (!name || !description || !category || !imageSrc) {
      return new NextResponse(
        JSON.stringify({ error: "Todos os campos são obrigatórios." }),
        { status: 400 }
      );
    }

    // Usa o Prisma para ATUALIZAR o projeto no banco de dados
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name,
        description,
        category,
        imageSrc,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Erro ao atualizar projeto:", error);
    return new NextResponse(
      JSON.stringify({ error: "Erro ao atualizar o projeto." }),
      { status: 500 }
    );
  }
}

// --- FUNÇÃO DE DELETAR (continua a mesma) ---
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;
    await prisma.project.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Projeto deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar projeto:", error);
    return new NextResponse(
      JSON.stringify({ error: "Erro ao deletar o projeto." }),
      { status: 500 }
    );
  }
}
