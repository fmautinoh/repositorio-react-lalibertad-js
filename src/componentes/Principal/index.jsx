import NavbarComponent from "../Navbar";

const PrincipalComponent = () => {
  return (
    <div className="absolute lg:w-screen lg:h-screen fondo-P sm:w-[100%] sm:h-[150%]">
      <NavbarComponent />
      <div className="lg:w-[93%] lg:h-[92%]">
        <div className="relative flex flex-col items-center lg:items-start lg:top-[4%] lg:left-[5%] lg:right-8 lg:h-[95%] Contenido">
          <div className="flex flex-col items-center lg:items-start w-full text-center">
            <div
              className="relative lg:top-[30%] lg:left-48 lg:w-3/4 text-[#0092FC] lg:text-3xl font-bold sm:text-2xl sm:top-[55%]"
              style={{ fontFamily: "Alfa Slab One", lineHeight: "1.4" }}
            >
              INSTITUCIÓN EDUCATIVA EMBLEMÁTICA “COLEGIO DE LA LIBERTAD”
            </div>
            <img
              className="relative lg:top-[47%] lg:left-[45%] lg:w-40 lg:h-40 shadow-inner rounded-full sm:w-24 sm:h-24 sm:top-[8%] sm:left-[20%] "
              src="src/assets/ASD-1.svg"
              alt="Placeholder Image"
            />
            <div
              className="relative lg:top-[64%] lg:left-[12%] lg:w-3/4 text-[#568BDA] lg:text-4xl font-bold sm:text-xl sm:top-[55%]"
              style={{ fontFamily: "Amaranth", lineHeight: "1.4" }}
            >
              BIENVENIDO AL REPOSITORIO DE DOCUMENTOS ADMINISTRATIVOS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalComponent;
