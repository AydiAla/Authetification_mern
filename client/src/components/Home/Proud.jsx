import logo from "../Assets/imgs/shutterstock_1873067050-1-removebg-preview.png";
import "../Home/proud.css";
import { Button } from "react-bootstrap";

function Proud() {
  return (
    //
    <div className="wrappere">
      <div className="description">
        <h1>LinkHub</h1>
        <p>Fonctionnalités clés, intégrations et tarification</p>
        <p>
          Avec 8 ans d’expérience dans le développement de logiciels eLearning,{" "}
          <span>LinkHub</span> offre des conseils sur des portails
          d’apprentissage.
        </p>
        <div className="btn">
          <Button variant="primary">Lire La Suite</Button>
          <a href="/register">
            <Button variant="outline-primary">
              {" "}
              Inscrivez-vous maintenant
            </Button>
          </a>
        </div>
      </div>
      <div
        id="logo"
        className="d-flex justify-content-center align-items-center"
      >
        <img src={logo} alt="e-learning platform" className="img-fluid" />
      </div>
    </div>
  );
}

export default Proud;
