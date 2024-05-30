const PrincipalContenido = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:top-8 lg:left-[17%] lg:right-8 lg:bottom-8 sm:w-[80%] sm:h-[80%] sm:left-[18%] Contenido">
        <img
          className="relative lg:top-[10%] lg:left-[5%] lg:w-40 lg:h-40 shadow-inner rounded-full sm:w-24 sm:h-24 sm:left-[40%] sm:top-[20%] "
          src="src/assets/ASD-1.svg"
          alt="Placeholder Image"
        />
        <div className="flex flex-col items-center lg:items-start w-full text-center">
          <div
            className="absolute lg:top-20 lg:left-[12%] lg:w-3/4 text-[#0092FC] lg:text-4xl font-bold sm:text-2xl sm:top-[35%]"
            style={{ fontFamily: "Alfa Slab One", lineHeight: "1.4" }}
          >
            INSTITUCIÓN EDUCATIVA EMBLEMÁTICA “COLEGIO DE LA LIBERTAD”
          </div>
          <div
            className="absolute lg:top-80 lg:left-[12%] lg:w-3/4 text-[#568BDA] lg:text-4xl font-bold sm:text-xl sm:top-[55%]"
            style={{ fontFamily: "Amaranth", lineHeight: "1.4" }}
          >
            BIENVENIDO AL REPOSITORIO DE DOCUMENTOS ADMINISTRATIVOS
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrincipalContenido;
