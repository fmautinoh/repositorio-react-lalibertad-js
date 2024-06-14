import RepoPrincipalComponent from "./componente/RepositorioComponent";
import NavbarComponent from "../Navbar";
const RepoPrincipal = () => {
  return (
    <div className="tw-relative tw-min-h-screen tw-flex tw-flex-col tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500">
      <NavbarComponent />
      <div className="tw-flex-1">
        <RepoPrincipalComponent />
      </div>
    </div>
  );
};
export default RepoPrincipal;
