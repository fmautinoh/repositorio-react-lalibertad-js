const PrincipalContenido = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-8 left-1/4 right-8 bottom-8 bg-gradient-to-b from-[#88D4F4] via-white to-[#88D4F4] rounded-[40px]"></div>
      <img
        className="relative top-40 left-80 w-40 h-40 shadow-inner rounded-full border-4 border-opacity-60 border-[#2D63B2]"
        src="https://via.placeholder.com/163x158"
        alt="Placeholder Image"
      />

      <div
        className="absolute top-36 left-[25%] right-0 mx-auto w-3/4 text-center text-[#0092FC] text-4xl font-bold"
        style={{ fontFamily: "Alfa Slab One", lineHeight: "1.4" }}
      >
        INSTITUCIÓN EDUCATIVA EMBLEMÁTICA “COLEGIO DE LA LIBERTAD”
      </div>
      <div
        className="absolute top-96 left-[22%] right-0 mx-auto w-3/4 text-center text-[#568BDA] text-4xl font-bold"
        style={{ fontFamily: "Amaranth", lineHeight: "1.4" }}
      >
        BIENVENIDO AL REPOSITORIO DE DOCUMENTOS ADMINISTRATIVOS
      </div>
      <div
        className="absolute bottom-4 left-96 w-full text-center text-black text-xl font-bold capitalize"
        style={{ fontFamily: "Impact" }}
      >
        Desarrollado por s&f systems ©
      </div>
    </div>
  );
};
export default PrincipalContenido;
