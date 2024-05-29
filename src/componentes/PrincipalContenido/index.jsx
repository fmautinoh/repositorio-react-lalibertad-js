const PrincipalContenido = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-8 left-[17%] right-8 bottom-8 Contenido items-center">
        <img
          className="relative top-[10%] left-[5%] w-40 h-40 shadow-inner rounded-full"
          src="src/assets/ASD-1.svg"
          alt="Placeholder Image"
        />
        <div className="justify-center">
          <div
            className="absolute top-20 left-[12%] right-0 mx-auto w-3/4 text-center text-[#0092FC] text-4xl font-bold"
            style={{ fontFamily: "Alfa Slab One", lineHeight: "1.4" }}
          >
            INSTITUCIÓN EDUCATIVA EMBLEMÁTICA “COLEGIO DE LA LIBERTAD”
          </div>
          <div
            className="absolute top-80 left-[12%] right-0 mx-auto w-3/4 text-center text-[#568BDA] text-4xl font-bold"
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
