import Navbare from "../navbar/navbare";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layouts() {
  const location = useLocation();

  return (
    <>
      <Navbare />
      <Outlet />
      {!(
        location.pathname === "/login" || location.pathname === "/register"
      ) ? (
        <Footer />
      ) : null}
    </>
  );
}

export default Layouts;
