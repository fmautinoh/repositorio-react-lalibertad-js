import React from "react";
import { repohoks } from "../../hook/RepositorioLogic";

const DocumentoForm = () => {
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
        <form onSubmit={handleCreateDoc}>
            <div>
                <label>Asunto:</label>
                <input
                    type="text"
                    value={asunto}
                    onChange={(e) => setasunto(e.target.value)}
                />
            </div>
            <div>
                <label>Número de Documento:</label>
                <input
                    type="text"
                    value={num_doc}
                    onChange={(e) => setnum_doc(e.target.value)}
                />
            </div>
            <div>
                <label>Nivel de Acceso Mínimo:</label>
                <input
                    type="text"
                    value={niv_acc_min}
                    onChange={(e) => setniv_acc_min(e.target.value)}
                />
            </div>
            <div>
                <label>Tipo de Documento:</label>
                <input
                    type="text"
                    value={id_tip}
                    onChange={(e) => setid_tip(e.target.value)}
                />
            </div>
            <div>
                <label>Archivo:</label>
                <input type="file" onChange={handleFileChange} />
            </div>
            <button type="submit">Crear Documento</button>
        </form>
    );
};

export default DocumentoForm;
