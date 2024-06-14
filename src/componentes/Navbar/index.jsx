import React from "react";
import { useUser } from "../../hook/store/userProvider"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { state } = useUser();

  return (
    <header className="bg-indigo-600 text-white px-20 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/src/assets/user-interface.png"
          alt="Usuario"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className=" text-white flex flex-col -space-y-1">
          <span className="font-bold ">{state.user}</span>
          <span>{state.cargo}</span>
        </div>
      </div>
      <nav className="flex items-center">
        <Link
          to="/principal"
          className="text-lg font-bold hover:bg-indigo-400 hover:rounded py-1 px-4"
        >
          Inicio
        </Link>
        <Link
          to="/repositorio"
          className="text-lg font-bold hover:bg-indigo-400 hover:rounded py-1 px-4"
        >
          Repositorio
        </Link>
        <Link
          to="/"
          className="text-lg font-bold hover:bg-indigo-400 hover:rounded py-1 px-4"
        >
          Salir
        </Link>
      </nav>
    </header>
  );
};

export default NavbarComponent;