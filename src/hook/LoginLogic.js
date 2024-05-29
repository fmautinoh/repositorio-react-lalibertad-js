import { useState } from "react";

export const loginhooks = () => {
  const [user, setUser] = useState("");
  const [pswd, setPwsd] = useState("");

  const handleIngresarLogin = (e) => {
    e.preventdefault
    console.log("usuario: ", user, " pws: ", pswd)
    //AGREGAR ENVIO AL BACKEND Y REDIRECCIÓN A LA PÁGINA PRINCIPAL
    //y tmbn para que el valor de user no se cambie a menos que cierre sesión e inicie otra persona

  };

  return{
    user,
    setUser,
    pswd,
    setPwsd,
    handleIngresarLogin,
  }
};
