import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Endpoint para debug - verificar dados do banco
export async function GET() {
  try {
    console.log("DATABASE_URL:", process.env.DATABASE_URL?.substring(0, 50) + "...");
    console.log("PRISMA_DATABASE_URL:", process.env.PRISMA_DATABASE_URL?.substring(0, 50) + "...");
    
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      env: process.env.NODE_ENV,
      projectCount: projects.length,
      latestProjects: projects.slice(0, 3).map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        createdAt: p.createdAt,
      })),
      databaseUrl: process.env.DATABASE_URL ? "EXISTS" : "MISSING",
      prismaDatabaseUrl: process.env.PRISMA_DATABASE_URL ? "EXISTS" : "MISSING",
    });
  } catch (error) {
    console.error("Erro ao buscar projetos para debug:", error);
    return NextResponse.json({ 
      error: "Erro ao conectar com banco",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
