import Navbarcomponent from "../Navbar";
import PrincipalContenido from "../PrincipalContenido";
const PrincipalComponent = () => {
  return (
    <div className="relative w-full h-screen fondo-P bg-cover">
      <Navbarcomponent />
      <PrincipalContenido />
    </div>
  );
};
export default PrincipalComponent;
