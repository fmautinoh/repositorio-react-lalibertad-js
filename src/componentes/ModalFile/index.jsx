import React, { useState, useEffect } from "react";
import useFileLoader from "./../ModalFile/index"; // Asegúrate de que la ruta del hook useFileLoader sea correcta y apunte al archivo adecuado

const FileModal = ({
  idfile,
  asunto,
  tipodoc,
  numdoc,
  openModalProp,
  onClose,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { verFile, data } = useFileLoader(); // Importa el hook useFileLoader para cargar el archivo

  useEffect(() => {
    setModalIsOpen(openModalProp); // Actualiza el estado del modal basado en openModalProp
    if (openModalProp) {
      verFile(idfile); // Carga el archivo cuando se abre el modal y idfile está definido
    }
  }, [idfile, openModalProp, verFile]); // Dependencias para el efecto useEffect

  const closeModal = () => {
    setModalIsOpen(false); // Cierra el modal
    onClose(); // Llama a la función onClose del padre para manejar el cierre
  };

  return (
    <>
      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90vw] max-w-[1200px] grid grid-cols-[300px_1fr] gap-6">
            {/* Panel izquierdo */}
            <div className="bg-muted p-6 rounded-l-lg">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Asunto</h3>
                  <p>{asunto}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Tipo de documento</h3>
                  <p>{tipodoc}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Número de documento</h3>
                  <p>{numdoc}</p>
                </div>
              </div>
            </div>
            {/* Panel derecho con iframe para la vista previa */}
            <div className="bg-muted p-6 rounded-r-lg">
              <div className="h-[80vh] overflow-auto">
                {data && (
                  <iframe
                    src={URL.createObjectURL(data)}
                    width="100%"
                    height="100%"
                    title="File Preview"
                    className="w-full h-full border-none"
                  ></iframe>
                )}
              </div>
            </div>
            {/* Botón de cierre del modal */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-12 text-3xl font-bold text-red-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileModal;
