

import React, { createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const UserContext = createContext();

const initialState = {
  user: localStorage.getItem("user") || "",
  id_usu: parseInt(localStorage.getItem("id_usu")) || 0,
  pswd: localStorage.getItem("pswd") || "",
  cargo: localStorage.getItem("cargo") || "",
  tokens: localStorage.getItem("tokens") || "",
  error: localStorage.getItem("error") || null,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
