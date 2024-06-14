import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginComponent from "./componentes/Login/LoginComponent";
import PrincipalComponent from "./componentes/Principal";
import RepoPrincipal from "./componentes/Repositorio";
import DocumentoForm from "./componentes/test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./hook/store/userProvider"; // Asegúrate de que la ruta sea correcta

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginComponent />} />
          <Route path="/principal" element={<PrincipalComponent />} />
          <Route path="/repositorio" element={<RepoPrincipal />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
