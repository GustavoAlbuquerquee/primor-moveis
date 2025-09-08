"use client";

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "@/components/Modal";
import ConfirmationModal from "@/components/ConfirmationModal";
import toast from "react-hot-toast";
import * as S from "./styles";

type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  imageSrc: string;
  createdAt: string;
};

const projectCategories = [
  "Quartos",
  "Sala",
  "Cozinha",
  "Corporativos",
  "Banheiros",
  "Home Office",
  "Projetos Especiais",
];

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    category: projectCategories[0],
    imageSrc: "",
  });
  const [uploadStatus, setUploadStatus] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        throw new Error("Falha ao buscar projetos");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Falha ao buscar projetos", error);
      toast.error("Não foi possível carregar os projetos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus("Enviando imagem...");
    try {
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        }
      );
      const newBlob = await response.json();
      if (response.ok) {
        setUploadStatus("Imagem enviada com sucesso!");
        setFormState((prev) => ({ ...prev, imageSrc: newBlob.url }));
      } else {
        throw new Error(newBlob.error || "Falha no upload");
      }
    } catch (error: any) {
      console.error(error);
      setUploadStatus(`Erro no upload: ${error.message}`);
      toast.error(`Erro no upload: ${error.message}`);
    }
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setFormState({
      name: "",
      description: "",
      category: projectCategories[0],
      imageSrc: "",
    });
    setUploadStatus("");
    setIsFormModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setIsEditMode(true);
    setSelectedProject(project);
    setFormState(project);
    setUploadStatus("Imagem existente. Anexe uma nova apenas para substituir.");
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.imageSrc) {
      toast.error("Por favor, anexe uma imagem.");
      return;
    }

    const url = isEditMode
      ? `/api/projects/${selectedProject?.id}`
      : "/api/projects";
    const method = isEditMode ? "PUT" : "POST";

    const promise = fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    }).then((response) => {
      if (!response.ok) throw new Error("Falha na operação.");
      return response.json();
    });

    toast.promise(promise, {
      loading: isEditMode
        ? "Atualizando projeto..."
        : "Salvando novo projeto...",
      success: () => {
        setIsFormModalOpen(false);
        fetchProjects();
        return `Projeto ${isEditMode ? "atualizado" : "salvo"} com sucesso!`;
      },
      error: `Erro ao ${isEditMode ? "atualizar" : "salvar"} o projeto.`,
    });
  };

  const openDeleteModal = (project: Project) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedProject) return;

    setIsDeleteModalOpen(false);

    const deletePromise = fetch(`/api/projects/${selectedProject.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) throw new Error("Falha ao excluir.");
      return response.json();
    });

    toast.promise(deletePromise, {
      loading: "Excluindo...",
      success: () => {
        fetchProjects();
        setSelectedProject(null);
        return "Projeto excluído com sucesso!";
      },
      error: "Erro ao excluir.",
    });
  };

  if (isLoading) {
    return (
      <S.DashboardWrapper>
        <p>Carregando projetos...</p>
      </S.DashboardWrapper>
    );
  }

  return (
    <>
      <S.DashboardWrapper>
        <S.Header>
          <S.Title>Gerenciar Projetos</S.Title>
          <S.AddButton onClick={openAddModal}>
            Adicionar Novo Projeto
          </S.AddButton>
        </S.Header>

        <S.TableContainer>
          <S.ProjectTable>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Criado em</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.category}</td>
                  <td>
                    {new Date(project.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <S.ActionsCell>
                    <button
                      className="edit"
                      aria-label="Editar"
                      onClick={() => openEditModal(project)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete"
                      aria-label="Excluir"
                      onClick={() => openDeleteModal(project)}
                    >
                      <FaTrash />
                    </button>
                  </S.ActionsCell>
                </tr>
              ))}
            </tbody>
          </S.ProjectTable>
        </S.TableContainer>
      </S.DashboardWrapper>

      {/* MODAL PARA ADICIONAR/EDITAR PROJETO */}
      {isFormModalOpen && (
        <Modal onClose={() => setIsFormModalOpen(false)}>
          <S.ModalForm onSubmit={handleFormSubmit}>
            <h2>{isEditMode ? "Editar Projeto" : "Adicionar Novo Projeto"}</h2>
            <S.FormInput
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              placeholder="Nome do Projeto"
              required
            />
            <S.FormTextarea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              placeholder="Descrição"
              required
              rows={4}
            />
            <S.FormSelect
              name="category"
              value={formState.category}
              onChange={handleInputChange}
              required
            >
              {projectCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </S.FormSelect>
            <S.FormFileInput
              type="file"
              onChange={handleFileChange}
              required={!isEditMode}
            />
            {uploadStatus && <S.UploadStatus>{uploadStatus}</S.UploadStatus>}
            <S.AddButton type="submit">
              {isEditMode ? "Salvar Alterações" : "Salvar Projeto"}
            </S.AddButton>
          </S.ModalForm>
        </Modal>
      )}

      {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
      {isDeleteModalOpen && selectedProject && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          title="Confirmar Exclusão"
          message={`Tem certeza que deseja excluir o projeto "${selectedProject.name}"?`}
          isError={true}
        >
          <S.ConfirmationActions>
            <S.ModalButton onClick={() => setIsDeleteModalOpen(false)}>
              Cancelar
            </S.ModalButton>
            <S.DangerButton onClick={handleDelete}>Sim, Excluir</S.DangerButton>
          </S.ConfirmationActions>
        </ConfirmationModal>
      )}
    </>
  );
}
