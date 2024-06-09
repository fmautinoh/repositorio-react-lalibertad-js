import React from "react";
import { repohoks } from "../../hook/RepositorioLogic";

const DocumentoForm = ({show,onClose}) => {

  if (!show) {
    return null;
  }

    const {
        asunto,
        setasunto,
        num_doc,
        setnum_doc,
        niv_acc_min,
        setniv_acc_min,
        handleFileChange,
        id_tip,
        setid_tip,
        handleCreateDoc,
    } = repohoks();

    return (
      <div className="fixed inset-0 bg-gray-500 backdrop-blur bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto  border w-[60%] shadow-lg rounded-md bg-white">
          <form onSubmit={handleCreateDoc} className="p-6 flex flex-col gap-1">
            <h1 className="font-semibold text-gray-800 text-lg mb-2">Agregar Nuevo documento</h1>
            <div className="flex flex-col">
                <label>Asunto:</label>
                <input className="border px-2 py-1 rounded"
                    type="text"
                    value={asunto}
                    onChange={(e) => setasunto(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label>Número de Documento:</label>
                <input className="border px-2 py-1 rounded"
                    type="text"
                    value={num_doc}
                    onChange={(e) => setnum_doc(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label>Nivel de Acceso Mínimo:</label>
                <input className="border px-2 py-1 rounded"
                    type="text"
                    value={niv_acc_min}
                    onChange={(e) => setniv_acc_min(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label>Tipo de Documento:</label>
                <input className="border px-2 py-1 rounded"
                    type="text"
                    value={id_tip}
                    onChange={(e) => setid_tip(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label>Archivo:</label>
                <input className="border pe-2 bg-gray-50 rounded" type="file" onChange={handleFileChange} />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button type="submit" className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600">Crear Documento</button>
              <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default DocumentoForm;
