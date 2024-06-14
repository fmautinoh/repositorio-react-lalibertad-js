import NavbarComponent from "../Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import RepoPrincipal from "../../componentes/Repositorio";
import LoginComponent from "../../componentes/Login/LoginComponent";

const AppInicio = () => {
  return (
    <div className=" sm:w-[100%] sm:h-[150%]">
      <div className="p-6">
        <div className="flex flex-col justify-center items-center  ">
          <div className="py-10 flex flex-col justify-center items-center gap-4 w-full text-center bg-sky-100 shadow rounded-lg">
            <div className="w-full lg:w-3/4 text-[#0092FC] lg:text-3xl font-bold sm:text-2xl">
              INSTITUCIÓN EDUCATIVA EMBLEMÁTICA <br /> “COLEGIO DE LA LIBERTAD”
            </div>
            <img
              className="lg:w-40 lg:h-40 w-20 h-20"
              src="src/assets/ASD-1.svg"
              alt="Placeholder Image"
            />
            <div className="w-full lg:w-3/4 text-[#568BDA] lg:text-4xl font-bold sm:text-xl">
              BIENVENIDO AL REPOSITORIO DE <br /> DOCUMENTOS ADMINISTRATIVOS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrincipalComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <AppInicio />
    </div>
  );
};

export default PrincipalComponent;
