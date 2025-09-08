import prisma from "@/lib/prisma";
import ProjectGallery from "./ProjectGallery";

export default async function ProjetosPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Serializar os dados para evitar problemas de hidratação
  const serializedProjects = projects.map((project) => ({
    ...project,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
  }));

  return <ProjectGallery projects={serializedProjects} />;
}
