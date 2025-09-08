import ProjectGallery from "./ProjectGallery";
import prisma from "@/lib/prisma";

type ProjectType = {
  id: string;
  name: string;
  description: string;
  category: string;
  imageSrc: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

// Revalida a página a cada 60 segundos em produção
export const revalidate = 60;

export default async function ProjetosPage() {
  let projects: ProjectType[] = [];

  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    projects = dbProjects.map((project: any) => ({
      ...project,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.log("Erro ao buscar projetos:", error);
    projects = [];
  }

  return <ProjectGallery projects={projects} />;
}
