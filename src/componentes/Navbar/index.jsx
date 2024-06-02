import { loginhooks } from "../../hook/LoginLogic";

const Navbarcomponent = () => {
  const { user, cargo } = loginhooks();

  return (
    <nav className="tw-bg-indigo-600 tw-text-white tw-px-4 tw-py-2 tw-flex tw-justify-between tw-items-center">
      <div className="tw-flex tw-items-center">
        <img
          src="/src/assets/user-interface.png"
          alt="Usuario"
          className="tw-w-10 tw-h-10 tw-rounded-full tw-mr-4"
        />
        <span className="tw-text-xl tw-font-bold tw-text-white">
          {user} <p>  </p> {cargo}
        </span>
      </div>
      <div className="tw-flex tw-items-center tw-space-x-4">
        <a
          href="#"
          className="tw-text-lg tw-font-bold hover:tw-text-rose-600"
        >
          INICIO
        </a>
        <button
          className="tw-text-lg tw-font-bold hover:tw-text-rose-600"
        >
          REPOSITORIO
        </button>
      </div>
    </nav>
  );
};

export default Navbarcomponent;
