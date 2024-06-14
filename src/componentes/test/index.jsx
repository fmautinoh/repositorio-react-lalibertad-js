import React from "react";

const DocumentoForm = ({
  show,
  onClose,
  asunto,
  setAsunto, // Corregido
  num_doc,
  setNumDoc, // Corregido
  niv_acc_min,
  setNivAccMin, // Corregido
  handleFileChange,
  id_tip,
  setIdTip, // Corregido
  handleCreateDoc,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 backdrop-blur bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto border w-[60%] shadow-lg rounded-md bg-white">
        <form onSubmit={handleCreateDoc} className="p-6 flex flex-col gap-1">
          <h1 className="font-semibold text-gray-800 text-lg mb-2">
            Agregar Nuevo documento
          </h1>
          <div className="flex flex-col">
            <label>Asunto:</label>
            <input
              className="border px-2 py-1 rounded"
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)} // Corregido
            />
          </div>
          <div className="flex flex-col">
            <label>Número de Documento:</label>
            <input
              className="border px-2 py-1 rounded"
              type="text"
              value={num_doc}
              onChange={(e) => setNumDoc(e.target.value)} // Corregido
            />
          </div>
          <div className="flex flex-col">
            <label>Nivel de Acceso Mínimo:</label>
            <input
              className="border px-2 py-1 rounded"
              type="text"
              value={niv_acc_min}
              onChange={(e) => setNivAccMin(e.target.value)} // Corregido
            />
          </div>
          <div className="flex flex-col">
            <label>Tipo de Documento:</label>
            <input
              className="border px-2 py-1 rounded"
              type="text"
              value={id_tip}
              onChange={(e) => setIdTip(e.target.value)} // Corregido
            />
          </div>
          <div className="flex flex-col">
            <label>Archivo:</label>
            <input
              className="border px-2 py-1 rounded"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
            >
              Crear Documento
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentoForm;
