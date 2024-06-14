import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginComponent from "./componentes/Login/LoginComponent";
import PrincipalComponent from "./componentes/Principal";
import RepoPrincipal from "./componentes/Repositorio";
import DocumentoForm from "./componentes/test"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PrincipalComponent />
  </BrowserRouter>
);
