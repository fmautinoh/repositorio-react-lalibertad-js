import React, { createContext, useContext, useReducer } from "react";
import { initialState, userReducer } from "./userReducer";

// Crear el contexto
const UserContext = createContext();

// Crear un proveedor del contexto
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);
