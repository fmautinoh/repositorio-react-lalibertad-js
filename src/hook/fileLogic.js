import { useUser } from "./store/userProvider";
import { useState, useEffect } from "react";

export const filehooks = () => {
  const {
    state: { tokens },
  } = useUser();
  const [Data, setData] = useState([]);

  const verFile = async (idfile, asunto, tipodoc, numdoc) => {
    try {
      const response = await fetch(
        `http://localhost:3001/repositorio/documento/file/${idfile}`,
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

      const fileData = await response.blob();
      const datos = {
        asunto,
        tipodoc,
        numdoc,
        fileData,
      };
      setData(datos);
      //console.log("data:", datos);
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  };
  /*
  useEffect(() => {
    console.log("Updated Data:", Data);
  }, [Data]);
*/
  return {
    verFile,
    Data,
  };
};
