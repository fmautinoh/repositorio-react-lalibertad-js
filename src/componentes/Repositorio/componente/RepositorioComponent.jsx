import React, { useState, useEffect } from "react";
import DocumentoForm from "../../test";
import { repohoks } from "../../../hook/RepositorioLogic";

const RepoPrincipalComponent = () => {
  const {
    GetRepo,
    repoData,
    currentPage,
    totalPages,
    pageSize,
    handlePageChange,
  } = repohoks();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    GetRepo(currentPage);
  }, [currentPage]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <div key={doc.id_doc} className="shadow bg-white rounded-md p-4">
              <h4 className="font-semibold text-gray-800">{doc.asunto}</h4>
              <ul className="mb-1">
                <li className="text-gray-600">{doc.id_tip}</li>
                <li className="text-gray-600">{doc.num_doc}</li>
              </ul>
              <button className="w-full py-1 bg-orange-500 text-white rounded-md">
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
      <DocumentoForm show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default RepoPrincipalComponent;
