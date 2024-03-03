import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaUserTie, FaClock, FaUser } from "react-icons/fa";
import onlineclass from "../Assets/imgs/transition-online.jpg"; // Replace 'pat

function PopularCourses() {
  return (
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
        </Row>
      </Container>
    </div>
  );
}

export default PopularCourses;
