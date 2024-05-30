import { loginhooks } from "../../hook/LoginLogic";

const Navbarcomponent = () => {
  const { user } = loginhooks();

  return (
    <div className="absolute top-0 left-0 lg:w-[15%] h-full flex flex-col items-center fondo-NP barraLateral sm:w-[16%]">
      <div
        className="lg:text-2xl sm:text-sm py-[30%] font-bold uppercase text-center text-indigo-700"
        style={{ fontFamily: "Impact" }}
      >
        REPOSITORIO DE DOCUMENTOS ADMINISTRATIVOS
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <div
          className="flex flex-col items-center lg:gap-4 lg:w-[137px] lg:h-[136px] sm:w-[53%] sm:h-[12%]"
        >
          <img
            className="w-full h-36 bg-[#B5DBFF] shadow-xl backdrop-blur-sm rounded-full"
            src="\src\assets\user-interface.png"
            alt="https://www.flaticon.es/iconos-gratis/usuario"
          />
          <div
            className="text-black text-sm font-medium text-center imagenUser"
            style={{ fontFamily: "Inter", lineHeight: "1.4", width: "70%" }}
          >
            <label htmlFor="imagenUser">{user}</label>
          </div>
        </div>
        <div
          className="text-white text-xl font-bold py-12"
          style={{
            fontFamily: "Alfa Slab One",
            lineHeight: "1.4",
            marginBottom: "5px",
          }}
        >
          <a href="#" className="hover:text-red-800">INICIO</a>
        </div>
        <div
          className="text-white lg:text-xl font-bold uppercase lg:pb-[5px] sm:pb-2 "
          style={{
            fontFamily: "Alfa Slab One",
            lineHeight: "1.4",
          }}
        >
          <a href="#" className="sm:text-sm">REPOSITORIO</a>
        </div>
      </div>
    </div>
  );
};
export default Navbarcomponent;
