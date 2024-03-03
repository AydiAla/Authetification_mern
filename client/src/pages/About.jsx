import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imgAbout from "../components/Assets/imgs/about.jpg";
import coverPhoto from "../components/Assets/imgs/E-learning-facility-for-Pakistani-Students.jpg";
import graduation from "../components/Assets/imgs/graduation-hat.png";
import onlineclass from "../components/Assets/imgs/online-class.png";
// import idea from "../components/Assets/imgs/idea.png";
// import book from "../components/Assets/imgs/book.png";
import "./about.css";
const About = () => {
  return (
    <>
      {/* Header Start */}
      <div
        className="container-fluid bg-dark text-white py-5 mb-5 page-header"
        style={{
          backgroundColor: "#343a40", // Set your desired background color
          backgroundImage: `url(${coverPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh", // Adjust the height to your preference
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Header End */}

      {/* Service Start */}
      {/* Service Start */}
      <div className="container-xxl py-5">
        <Container>
          <Row className="g-4">
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <Card className="custom-card">
                <Card.Img variant="top" src={onlineclass} />
                <Card.Body>
                  <Card.Title style={{ color: "#007BFF" }}>
                    Skilled Instructors
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "#555" }}>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <Card className="custom-card">
                <Card.Img variant="top" src={graduation} />
                <Card.Body>
                  <Card.Title style={{ color: "#007BFF" }}>
                    Skilled Instructors
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "#555" }}>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <Card className="custom-card d-flex align-items-center justify-content-center">
                {/* <Card.Img variant="top" src={idea} /> */}
                <i
                  className="fa fa-6x fa-globe text-primary mb-4"
                  aria-hidden="true"
                  style={{ color: "#87CEEB" }}
                ></i>
                <Card.Body>
                  <Card.Title style={{ color: "#007BFF" }}>
                    Skilled Instructors
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "#555" }}>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <Card className="custom-card d-flex align-items-center justify-content-center">
                <i
                  className="fa fa-book fa-6x text-primary mb-4"
                  aria-hidden="true"
                  style={{ color: "#87CEEB" }}
                ></i>

                <Card.Body>
                  <Card.Title style={{ color: "#007BFF" }}>
                    Skilled Instructors
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "#555" }}>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Service End */}
      {/* Service End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <Container>
          <Row className="g-5">
            <Col
              lg={6}
              className="wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <Image
                  src={imgAbout}
                  alt=""
                  className="img-fluid position-absolute w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">Welcome to eLEARNING</h1>
              <p className="mb-4">
                Votre destination pour des applications et des sites web sur
                mesure. Que vous soyez un client avec un projet spécifique ou
                que vous cherchiez à améliorer vos compétences numériques, nous
                proposons des forfaits de formation adaptés à tous les niveaux
                pour stimuler votre croissance numérique .
              </p>
              <p className="mb-4">
                Le e-learning offre une variété de services éducatifs, allant
                des cours universitaires aux formations professionnelles,
                offrant un accès immédiat à une multitude de connaissances. Les
                plateformes en ligne fournissent des supports interactifs, des
                vidéos pédagogiques et des évaluations en temps réel,
                encourageant la collaboration entre apprenants
              </p>

              <Button className="btn-primary py-3 px-5 mt-2" href="">
                Read More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* About End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <Container>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Instructors
            </h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <Row className="g-4">
            {/* Repeat similar Col blocks for each team member */}
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <Image className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <Image className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <Image className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <Image className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            {/* Repeat similar Col blocks for each team member */}
          </Row>
        </Container>
      </div>
      {/* Team End */}
    </>
  );
};

export default About;
