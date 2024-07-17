import React, { useEffect } from "react";

const DocumentoForm = ({
  show,
  onClose,
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
  handleUpdateDoc,
  selectedDoc,
}) => {
  useEffect(() => {
    if (selectedDoc) {
      setAsunto(selectedDoc.asunto);
      setNumDoc(selectedDoc.num_doc);
      setNivAccMin(selectedDoc.niv_acc_min);
      setIdTip(selectedDoc.id_tip);
    } else {
      setAsunto("");
      setNumDoc("");
      setNivAccMin("");
      setIdTip("");
    }
  }, [selectedDoc, setAsunto, setNumDoc, setNivAccMin, setIdTip]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDoc) {
      handleUpdateDoc(selectedDoc.id_doc);
    } else {
      handleCreateDoc();
    }

    onClose(); // Cerrar el formulario después de manejar la acción
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 backdrop-blur bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto border w-[60%] shadow-lg rounded-md bg-white">
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-1">
          <h1 className="font-semibold text-gray-800 text-lg mb-2">
            {selectedDoc ? "Editar Documento" : "Agregar Nuevo Documento"}
          </h1>
          <div className="flex flex-col">
            <label>Asunto:</label>
            <input
              className="border px-2 py-1 rounded"
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Número de Documento:</label>
            <input
              className="border px-2 py-1 rounded"
              type="text"
              value={num_doc}
              onChange={(e) => setNumDoc(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Nivel de Acceso Mínimo:</label>
            <select
              className="border px-2 py-1 rounded"
              value={niv_acc_min}
              onChange={(e) => setNivAccMin(e.target.value)}
            >
              <option value={0}>Seleccione el Nivel de Acceso Minimo</option>
              <option value={4}>Director</option>
              <option value={3}>Sub Director</option>
              <option value={2}>Secretaría</option>
              <option value={1}>SIAGIE</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Tipo de Documento:</label>
            <select
              className="border px-2 py-1 rounded"
              value={id_tip}
              onChange={(e) => setIdTip(e.target.value)}
            >
              <option value={0}>Seleccione el tipo de Documento</option>
              <option value={1}>Oficio</option>
              <option value={2}>Resolución</option>
              <option value={3}>Memorando</option>
              <option value={4}>Informe</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Archivo:</label>
            <input
              className="border px-2 py-1 rounded"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
            >
              {selectedDoc ? "Actualizar Documento" : "Crear Documento"}
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
