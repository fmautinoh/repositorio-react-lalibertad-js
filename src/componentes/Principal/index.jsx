import Navbarcomponent from "../Navbar";
import PrincipalContenido from "../PrincipalContenido";
const PrincipalComponent = () => {
  return (
    <div className="relative w-full h-screen fondo-P">
      <Navbarcomponent />
      <PrincipalContenido />
    </div>
  );
};
export default PrincipalComponent;
