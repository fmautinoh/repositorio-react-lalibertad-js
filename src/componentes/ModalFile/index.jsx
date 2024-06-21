import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const FileModal = ({
  idfile,
  asunto,
  tipodoc,
  numdoc,
  file,
  openModalProp,
  onClose,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openModalProp);
  }, [openModalProp]);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="PDF Modal"
      className="w-[90vw] max-w-[1200px] grid grid-cols-[300px_1fr] gap-6 bg-white p-6 rounded-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
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
      <div className="bg-muted p-6 rounded-r-lg">
        <div className="h-[80vh] overflow-auto">
          {file && (
            <iframe
              src={URL.createObjectURL(file)}
              width="100%"
              height="100%"
              title="PDF Preview"
              className="w-full h-full border-none" 
            ></iframe>
          )}
        </div>
      </div>
      <button
        onClick={closeModal}
        className="absolute top-2 right-12 text-3xl bold text-red-700"
      >
        &times;
      </button>
    </Modal>
  );
};

export default FileModal;
