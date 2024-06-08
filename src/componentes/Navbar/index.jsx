import { loginhooks } from "../../hook/LoginLogic";

const Navbarcomponent = () => {
  const { user, cargo } = loginhooks();

  return (
    <nav className="bg-indigo-600 text-white px-20 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/src/assets/user-interface.png"
          alt="Usuario"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className=" text-white flex flex-col -space-y-1">
          <span className="font-bold ">
            {user}
          </span>
          <span>
            {cargo}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="#"
          className="text-lg font-bold hover:bg-indigo-400 hover:rounded py-1 px-4"
        >
          Inicio
        </a>
        <button
          className="text-lg font-bold hover:bg-indigo-400 hover:rounded py-1 px-4"
        >
          Repositorio
        </button>
      </div>
    </nav>
  );
};

export default Navbarcomponent;
