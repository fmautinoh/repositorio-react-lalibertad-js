import { useState, useEffect } from "react";

export const loginhooks = () => {
  const [user, setUser] = useState("");
  const [id_usu, setId_usu] = useState(0);
  const [pswd, setPwsd] = useState("");
  const [cargo, setCargo] = useState("");
  const [tokens, setToken] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIdUser = localStorage.getItem("iduser");
    const storedToken = localStorage.getItem("tokens");
    if (storedUser && storedToken && storedIdUser) {
      setUser(storedUser);
      setToken(storedToken);
      setId_usu(storedIdUser);
    }
  }, [tokens]);

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
      console.log(data);
      console.log(tokens);

      setUser(data?.username);
      setToken(data?.token);
      setId_usu(data?.id_usu);

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
        default:
          setCargo("");
          break;
      }

      localStorage.setItem("user", data?.username);
      localStorage.setItem("tokens", data?.token);
      localStorage.setItem("iduser", data?.id_usu);

      // Redireccionamiento después de guardar en localStorage
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
    id_usu,
  };
};
