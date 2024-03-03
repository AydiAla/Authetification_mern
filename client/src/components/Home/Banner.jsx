import Carousel from "react-bootstrap/Carousel";
import coursel1 from "../Assets/imgs/e-learning-session-de-formation-en-ligne.jpg";
import coursel2 from "../Assets/imgs/carousel-2.jpg";

function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={coursel1} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h2>First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={coursel2} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <h2>Second slide label</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img src=Add the source for the third image className="d-block w-100" alt="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
