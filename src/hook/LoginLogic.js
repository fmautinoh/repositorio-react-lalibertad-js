import { useState, useEffect } from "react";

export const loginhooks = () => {
  const [user, setUser] = useState("");
  const [pswd, setPwsd] = useState("");
  const [cargo, setCargo] = useState("");
  const [tokens, setToken] = useState("");

  // Al cargar la página, intenta obtener el usuario del almacenamiento local
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []); // El segundo parámetro vacío indica que solo se ejecutará una vez al cargar el componente

  const handleIngresarLogin = async (e) => {
    e.preventDefault();
    const body = {
      username: user,
      pasword: pswd,
    };

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
      setToken(data?.token);

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

      // Guardar el usuario en el almacenamiento local
      localStorage.setItem("user", data?.username);

      // Redirigir a la página principal
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
    cargo,
    tokens,
  };
};
