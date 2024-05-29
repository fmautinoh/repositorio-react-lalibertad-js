import React from 'react';
import { loginhooks } from '../../hook/LoginLogic';

const LoginComponent = () => {
  const { user, setUser, pswd, setPwsd, handleIngresarLogin } = loginhooks();

  return (
    <div className="relative lgbg w-full h-screen">
      <div className="absolute inset-0 flex">
        <div className="flex-shrink-0 w-full lg:w-7/12 p-8">
          <img
            className="w-full h-full object-cover shadow-inner"
            src="src/assets/rectangle.svg"
            alt="Placeholder Image"
          />
        </div>
        <div className="relative flex-shrink-0 w-full lg:w-5/12 h-full p-8">
          <div className="relative Card bg-cover h-full p-32 flex flex-col items-center">
            <img className="w-40 h-40" src="src/assets/ASD-1.svg" alt="Avatar" />
            <div className="mt-16 w-3/4">
              <label
                className="block text-black font-medium text-lg mb-2"
                htmlFor="usuario"
              >
                USUARIO
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
            <div className="mt-8 w-3/4">
              <label
                className="block text-black font-medium text-lg mb-2"
                htmlFor="password"
              >
                CONTRASEÑA
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingrese Contraseña"
                className="w-full px-4 py-3 bg-white shadow-sm rounded-md border border-gray-300 text-gray-600"
                value={pswd}
                onChange={(e) => setPwsd(e.target.value)}
              />
            </div>
            <button
              className="mt-8 px-6 py-3 bg-[#23FFB0] text-white font-medium text-lg rounded-md shadow-sm"
              onClick={handleIngresarLogin}
            >
              INGRESAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
