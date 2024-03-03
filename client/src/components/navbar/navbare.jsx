import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Navbare() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow p-0">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">LinkHub</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarCollapse" className="me-4" />

        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto p-4 p-lg-0">
            <Nav.Link href="/" className="nav-item nav-link active me-2">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-item nav-link me-2">
              About
            </Nav.Link>
            <Nav.Link href="#" className="nav-item nav-link me-2">
              Courses
            </Nav.Link>

            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="nav-item me-2"
            >
              <NavDropdown.Item href="/register">Registre</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="nav-item nav-link me-2">
              Contact
            </Nav.Link>
          </Nav>

          {/* <Button
            href="#"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block mt-2"
          >
            <i className="fa fa-search ms-3"></i>
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbare;
