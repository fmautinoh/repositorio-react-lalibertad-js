import NavbarComponent from "../Navbar";
import PrincipalContenido from "../PrincipalContenido";

const PrincipalComponent = () => {
  return (
    <div className="absolute lg:w-screen lg:h-screen fondo-P sm:w-[100%] sm:h-[150%]">
      <NavbarComponent />
      <PrincipalContenido />
    </div>
  );
};

export default PrincipalComponent;
