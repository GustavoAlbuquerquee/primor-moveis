import prisma from "@/lib/prisma";
import ProjectGallery from "./ProjectGallery";

export default async function ProjetosPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <ProjectGallery projects={projects} />;
}
