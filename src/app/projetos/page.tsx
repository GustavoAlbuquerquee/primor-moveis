import prisma from "@/lib/prisma";
import ProjectGallery from "./ProjectGallery";

export default async function ProjetosPage() {
  // Busca os projetos diretamente do banco de dados no servidor
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <ProjectGallery projects={projects} />;
}
