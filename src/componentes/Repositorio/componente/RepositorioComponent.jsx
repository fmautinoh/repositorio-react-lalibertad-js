import React, { useState, useEffect } from "react";
import DocumentoForm from "../../test";
import { repohoks } from "../../../hook/RepositorioLogic";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
const RepoPrincipalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const {
    GetRepo,
    repoData,
    currentPage,
    totalPages,
    pageSize,
    handlePageChange,
    asunto,
    setAsunto,
    num_doc,
    setNumDoc,
    niv_acc_min,
    setNivAccMin,
    handleFileChange,
    id_tip,
    setIdTip,
    handleCreateDoc,
    handleDeleteDoc,
    cargo,
  } = repohoks(handleCloseModal);

  useEffect(() => {
    GetRepo(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const tipoDocumentos = {
    1: "Oficio",
    2: "Resolución",
    3: "Memorando",
    4: "Informe",
  };

  return (
    <div className="w-full h-full pb-12 pt-8 px-20 bg-gray-50">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input
            type="text"
            className="px-4 py-2 rounded shadow border"
            placeholder="Buscar"
          />
          <button className="px-8 py-2 rounded-md bg-black text-white hover:bg-gray-800">
            Buscar
          </button>
        </div>
        <button
          className="px-8 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
          onClick={handleOpenModal}
        >
          + Agregar
        </button>
      </div>
      <div className="w-full h-full flex justify-center items-start py-4">
        <div className="grid grid-cols-3 gap-5 w-full">
          {repoData.map((doc) => (
            <div
              key={doc.id_doc}
              className="shadow bg-white rounded-md p-4 relative"
            >
              <div className="absolute top-2 right-2 flex items-center justify-center">
                <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                {cargo === "Director" && (
                  <TrashIcon className="h-5 w-5 text-gray-500 cursor-pointer ml-2" onClick={() =>handleDeleteDoc(doc.id_doc)} />
                )}
              </div>
              <h4 className="font-semibold text-gray-800 truncate max-w-full">
                {tipoDocumentos[doc.id_tip]} - {doc.num_doc}
              </h4>
              <ul className="mb-1">
                <li className="text-gray-600">
                  {tipoDocumentos[doc.id_tip] || "Tipo Desconocido"}
                </li>
                <li className="text-gray-600">{doc.num_doc}</li>
                <li className="text-gray-600 truncate max-w-full">
                  {doc.asunto}
                </li>
              </ul>
              <button className="w-full py-1 bg-orange-500 text-white rounded-md flex items-center justify-center">
                <EyeIcon className="h-5 w-5 mr-2" />
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-100 px-4 py-1 rounded shadow hover:bg-gray-200 border text-gray-600"
        >
          Anterior
        </button>
        <span className="bg-gray-100 px-3 py-1 rounded shadow border text-gray-600">
          {currentPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-100 px-4 py-1 rounded shadow hover:bg-gray-200 border text-gray-600"
        >
          Siguiente
        </button>
      </div>
      <DocumentoForm
        show={showModal}
        onClose={handleCloseModal}
        asunto={asunto}
        setAsunto={setAsunto}
        num_doc={num_doc}
        setNumDoc={setNumDoc}
        niv_acc_min={niv_acc_min}
        setNivAccMin={setNivAccMin}
        handleFileChange={handleFileChange}
        id_tip={id_tip}
        setIdTip={setIdTip}
        handleCreateDoc={handleCreateDoc}
      />
    </div>
  );
};

export default RepoPrincipalComponent;
