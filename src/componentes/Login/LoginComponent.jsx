import React from 'react';
import { loginhooks } from '../../hook/LoginLogic';

const LoginComponent = () => {
  const { user, setUser, pswd, setPwsd, handleIngresarLogin } = loginhooks();

  return (
    <div className="!tw-absolute lgbg !tw-bg-gray-200 !tw-w-[50%] !tw-h-full">
      <div className="!tw-absolute !tw-inset-0 !tw-flex">
        <div className="!tw-flex-shrink-0 !tw-w-full !tw-lg:w-[12%] !tw-p-8">
          <img
            className="!tw-w-full !tw-h-full !tw-object-cover !tw-shadow-inner"
            src="src/assets/rectangle.svg"
            alt="Placeholder Image"
          />
        </div>
        <div className="!tw-relative !tw-flex-shrink-0 !tw-w-full !tw-lg:w-[12%] !tw-h-[12%] !tw-p-8">
          <div className="!tw-relative !tw-Card !tw-bg-cover !tw-h-full !tw-p-32 !tw-flex !tw-flex-col !tw-items-center">
            <img className="!tw-w-40 !tw-h-40" src="src/assets/ASD-1.svg" alt="Avatar" />
            <div className="!tw-mt-16 !tw-w-3/4">
              <label
                className="!tw-block !tw-text-black !tw-font-medium !tw-text-lg !tw-mb-2"
                htmlFor="usuario"
              >
                USUARIO
              </label>
              <input
                id="usuario"
                type="text"
                placeholder="Ingrese Usuario"
                className="!tw-w-full !tw-px-4 !tw-py-3 !tw-bg-white !tw-shadow-sm !tw-rounded-md !tw-border !tw-border-gray-300 !tw-text-gray-600"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="!tw-mt-8 !tw-w-3/4">
              <label
                className="!tw-block !tw-text-black !tw-font-medium !tw-text-lg !tw-mb-2"
                htmlFor="password"
              >
                CONTRASEÑA
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingrese Contraseña"
                className="!tw-w-full !tw-px-4 !tw-py-3 !tw-bg-white !tw-shadow-sm !tw-rounded-md !tw-border !tw-border-gray-300 !tw-text-gray-600"
                value={pswd}
                onChange={(e) => setPwsd(e.target.value)}
              />
            </div>
            <button
              className="!tw-mt-8 !tw-px-6 !tw-py-3 !tw-bg-green-500 !tw-text-white !tw-font-medium !tw-text-lg !tw-rounded-md !tw-shadow-sm"
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
