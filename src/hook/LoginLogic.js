import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./store/userProvider"; // Asegúrate de que la ruta sea correcta

export const useLogin = () => {
  const { state, dispatch } = useUser();

  const navigate = useNavigate();

  const handleIngresarLogin = async (e) => {
    e.preventDefault();
    const body = {
      username: state.user,
      pasword: state.pswd,
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
      console.log(state.tokens);

      dispatch({ type: "SET_USER", payload: data?.username });
      dispatch({ type: "SET_TOKEN", payload: data?.token });
      dispatch({ type: "SET_ID_USU", payload: data?.id_usu });

      let cargo = "";
      switch (data?.cargo) {
        case 1:
          cargo = "Director";
          break;
        case 2:
          cargo = "Sub Director de Primaria";
          break;
        case 3:
          cargo = "Desarrollador";
          break;
        default:
          cargo = "";
          break;
      }
      dispatch({ type: "SET_CARGO", payload: cargo });

      navigate("/principal");
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
      console.error("Error:", error);
    }
  };

  return {
    user: state.user,
    setUser: (value) => dispatch({ type: "SET_USER", payload: value }),
    pswd: state.pswd,
    setPswd: (value) => dispatch({ type: "SET_PSWD", payload: value }),
    handleIngresarLogin,
    cargo: state.cargo,
    tokens: state.tokens,
    id_usu: state.id_usu,
    error: state.error,
  };
};
