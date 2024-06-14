import React from "react";
import { useLogin } from "../../hook/LoginLogic";

const LoginComponent = () => {
  const { user, setUser, pswd, setPswd, handleIngresarLogin, error } =
    useLogin();

  return (
    <div className="w-full bg-gray-50 h-screen">
      <div className="w-full h-full flex ">
        <div className="w-full lg:flex justify-center flex-col hidden p-8 bg-sky-200 shadow-lg">
          <img
            className="object-cover"
            src="src/assets/rectangle.svg"
            alt="Placeholder Image"
          />
        </div>
        <div className="w-full h-full flex justify-center flex-col ">
          <div className="flex flex-col items-center gap-3 ">
            <img
              className="w-40 h-40"
              src="src/assets/ASD-1.svg"
              alt="Logo Colegio La Libertad"
            />
            {error && (
              <div className="px-10 py-1 text-sm text-red-600 rounded bg-red-200 border border-red-500">
                Usuario o clave incorrecto
              </div>
            )}
            <div className="w-3/5">
              <label
                className="block text-gray-600 font-medium text-lg mb-1"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                id="usuario"
                type="text"
                placeholder="Ingrese Usuario"
                className="w-full px-4 py-3 bg-white shadow-sm rounded-md border border-gray-300 text-gray-600"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="w-3/5">
              <label
                className="block text-gray-600 font-medium text-lg mb-1"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingrese Contraseña"
                className="w-full px-4 py-3 bg-white shadow-sm rounded-md border border-gray-300 text-gray-600"
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
              />
            </div>
            <button
              className="mt-8 px-6 py-2.5 bg-green-500 text-white font-medium text-lg rounded-md shadow-sm"
              onClick={handleIngresarLogin}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
