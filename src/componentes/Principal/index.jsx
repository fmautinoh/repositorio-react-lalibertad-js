import NavbarComponent from "../Navbar";
import PrincipalContenido from "../PrincipalContenido";

const PrincipalComponent = () => {
  return (
    <div className="absolute lg:w-screen lg:h-screen fondo-P sm:w-[100%] sm:h-[150%]">
      <NavbarComponent className="absolute top-0 left-0 w-full z-auto" />
      <div>
      <PrincipalContenido className="relative z-auto" />
      </div>

    </div>
  );
};

export default PrincipalComponent;
