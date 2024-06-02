import { useState } from "react";

export const loginhooks = () => {
  const [user, setUser] = useState("");
  const [pswd, setPwsd] = useState("");
  const [cargo, setCargo] = useState("");

  const handleIngresarLogin = async (e) => {
    e.preventDefault(); // <-- Corregí la función preventDefault
    //console.log("usuario: ", user, " pws: ", pswd)
    const body = {
      username: user,
      pasword: pswd,
    };

    //console.log(body);

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const data = await response.json();
      setUser(data?.username);

      switch (data?.cargo) {
        case 1:
          setCargo("Director");
          break;
        case 2:
          setCargo("Sub Director de Primaria");
          break;
        case 3:
          setCargo("Desarrollador");
          break;
        case 4:
          setCargo("");
          break;
        case 5:
          setCargo("");
          break;
        case 6:
          setCargo("");
          break;
        default:
          setCargo("");
          break;
      }

      //console.log(data);
      // AGREGAR REDIRECCIÓN A LA PÁGINA PRINCIPAL
      // window.location.href = "";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    user,
    setUser,
    pswd,
    setPwsd,
    handleIngresarLogin,
  };
};
