import { useState } from "react";
import { useUser } from "./store/userProvider";

export const filehooks = () => {
  const {
    state: { tokens },
  } = useUser();
  const [Data, setData] = useState(null);

  const verFile = async (idfile) => {
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
      setData(fileData);
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  };

  return {
    verFile,
    Data,
  };
};
