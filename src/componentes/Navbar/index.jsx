import { loginhooks } from "../../hook/LoginLogic";

const Navbarcomponent = () => {
  const { user } = loginhooks();

  return (
    <nav className="bg-indigo-900 text-white px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/src/assets/user-interface.png"
          alt="Usuario"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="text-xl font-bold text-white">
          {user}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://youtube.com/shorts/k_6WjFwlt9g?si=uaZ6bZsVDQRciQt4"
          className="text-lg hover:text-indigo-700"
        >
          INICIO
        </a>
        <button
          className="text-lg font-bold hover:text-indigo-700"
        >
          REPOSITORIO
        </button>
      </div>
    </nav>
  );
};

export default Navbarcomponent;
