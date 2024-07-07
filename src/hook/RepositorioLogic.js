import { useState, useEffect } from "react";
import { useUser } from "./store/userProvider";

export const repohoks = (handleCloseModal) => {
  const {
    state: { tokens, id_usu, cargo },
  } = useUser();

  const [id_doc, setid_doc] = useState("");
  const [asunto, setAsunto] = useState("");
  const [num_doc, setNumDoc] = useState("");
  const [niv_acc_min, setNivAccMin] = useState("");
  const [pathDoc, setPathDoc] = useState(null);
  const [id_tip, setIdTip] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalDocs, setTotalDocs] = useState(0);

  const handleFileChange = (event) => {
    setPathDoc(event.target.files[0]);
  };

  const handleCreateDoc = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("asunto", asunto);
    formData.append("num_doc", num_doc);
    formData.append("niv_acc_min", niv_acc_min);
    formData.append("pathDoc", pathDoc);
    formData.append("id_tip", id_tip);
    formData.append("id_usu", id_usu);

    try {
      const response = await fetch("http://localhost:3001/repositorio", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create document");
      }

      const result = await response.json();
      handleCloseModal();
      setNivAccMin("");
      setNumDoc("");
      setAsunto("");
      setIdTip("");

      console.log("Document created:", result);
      await GetRepo(currentPage); // Actualizar la lista después de crear el documento
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  const GetRepo = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:3001/repositorio/documentos-paginated?page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repository data");
      }

      const data = await response.json();
      setRepoData(data.docs);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setPageSize(data.pageSize);
      setTotalDocs(data.totalDocs);
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // No necesitas llamar GetRepo aquí porque ya se llama en useEffect
  };

  const UpdateRepo = async (dataUpdate, iddoc) => {
    try {
      const response = await fetch(
        `http://localhost:3001/repositorio/${iddoc}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
          body: dataUpdate,
        }
      );
      await GetRepo(currentPage); // Actualizar la lista después de actualizar el repositorio
    } catch (error) {
      console.error("Error updating repository data:", error);
    }
  };

  useEffect(() => {
    GetRepo(currentPage); // Llamar a GetRepo cuando se monta el componente o currentPage cambia
  }, [currentPage]); // Dependencia de useEffect

  return {
    id_doc,
    setid_doc,
    asunto,
    setAsunto,
    num_doc,
    setNumDoc,
    niv_acc_min,
    setNivAccMin,
    pathDoc,
    handleFileChange,
    id_tip,
    setIdTip,
    id_usu,
    handleCreateDoc,
    GetRepo,
    repoData,
    currentPage,
    totalPages,
    pageSize,
    totalDocs,
    handlePageChange,
    cargo,
    UpdateRepo,
  };
};
