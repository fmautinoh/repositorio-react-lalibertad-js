const PrincipalContenido = () => {
  return (
    <div className="absolute inset-0">
      <div className="relative overflow-y-auto inset-0 flex flex-col items-center lg:items-start lg:top-[14%] lg:left-[5%] lg:right-8 lg:bottom-8 sm:min-w-[80%] sm:min-h-[80%] lg:max-h-[95%] lg:max-w-[90%] sm:left-[1%] sm:top-[15%] Contenido">
        
        <div className="flex flex-col items-center lg:items-start w-full text-center">
          <div
            className="relative lg:top-16 lg:left-48 lg:w-3/4 text-[#0092FC] lg:text-3xl font-bold sm:text-2xl sm:top-[35%]"
            style={{ fontFamily: "Alfa Slab One", lineHeight: "1.4" }}
          >
            INSTITUCIÓN EDUCATIVA EMBLEMÁTICA “COLEGIO DE LA LIBERTAD”
          </div>
          <img
          className="relative lg:top-[80px] lg:left-[44.3%] lg:w-40 lg:h-40 shadow-inner rounded-full sm:w-24 sm:h-24 sm:top-[8%] sm:left-[20%] "
          src="src/assets/ASD-1.svg"
          alt="Placeholder Image"
        />
          <div
            className="relative lg:top-24 lg:left-[12%] lg:w-3/4 text-[#568BDA] lg:text-4xl font-bold sm:text-xl sm:top-[55%]"
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
