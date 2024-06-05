import { useState } from "react";
import { loginhooks } from "../hook/LoginLogic";

export const repohoks = () => {
  const { tokens, id_usu } = loginhooks(); // Obtener tokens e id_usu desde loginhooks

  const [id_doc, setid_doc] = useState("");
  const [asunto, setasunto] = useState("");
  const [num_doc, setnum_doc] = useState("");
  const [niv_acc_min, setniv_acc_min] = useState("");
  const [pathDoc, setpathDoc] = useState(null);
  const [id_tip, setid_tip] = useState("");

  const handleFileChange = (event) => {
    setpathDoc(event.target.files[0]);
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
        console.log(formData);
      if (!response.ok) {
        throw new Error("Failed to create document");
      }

      const result = await response.json();
      console.log("Document created:", result);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return {
    id_doc,
    setid_doc,
    asunto,
    setasunto,
    num_doc,
    setnum_doc,
    niv_acc_min,
    setniv_acc_min,
    pathDoc,
    handleFileChange,
    id_tip,
    setid_tip,
    id_usu,
    handleCreateDoc,
  };
};
