import { useState, useEffect } from "react";

export const loginhooks = () => {
  const [user, setUser] = useState("rz32");
  const [id_usu, setId_usu] = useState(1);
  const [pswd, setPwsd] = useState("");
  const [cargo, setCargo] = useState("Desarrollador");
  const [tokens, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ6MzIiLCJpYXQiOjE3MTc1OTc3MjIsImV4cCI6MTcxNzYwODUyMn0.v5iqpiWq7N1E0iOdPspxJefUolZiOi_lT1P2HnpgPsQ"
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storediduser = localStorage.getItem("iduser");
    const storedtoken = localStorage.getItem("tokens");
    if (storedUser) {
      setUser(storedUser);
      setToken(storedtoken);
      setId_usu(storediduser);
    }
  }, []);

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

      localStorage.setItem("user", data?.username || "rz32");
      localStorage.setItem("tokens", data?.token);
      localStorage.setItem("iduser", data?.id_usu || 1);

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
