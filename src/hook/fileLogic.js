import { useState } from "react";
import { useUser } from "./store/userProvider";

const useFileLoader = () => {
  const {
    state: { tokens },
  } = useUser();
  const [fileUrl, setFileUrl] = useState(null);

  const verFile = async (idfile) => {
    try {
      const response = await fetch(
        `http://localhost:3001/repositorio/documento/file/${idfile}`,
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch file data");
      }

      const fileData = await response.blob();
      const url = URL.createObjectURL(fileData);
      setFileUrl(url);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error fetching file data:", error);
    }
  };

  return { verFile, fileUrl };
};

export default useFileLoader;
