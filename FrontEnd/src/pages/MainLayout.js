import { Navbar, Container, Nav, Col } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import ico from "../logoNew.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const MainLayout = () => {
  return (
    <>
      {/* // className="px-2 expand-sm navbar-expand bg-nav top" */}
      <Navbar className="bg-nav px-2 top" expand="sm">
        <Container>
          <Col className="col-10 col-md-6">
            <Link className="navbar-brand" to="/">
              <img src={ico} alt="logo" className="img-dimension" />
            </Link>
          </Col>
          <Col className="col-md-6">
            <Navbar.Toggle aria-controls="main-navbar" className="col-12" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="me-auto p-2 col d-flex justify-content-between h5 collapse navbar-collapse">
                <NavLink className="nav-link " to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/menu">
                  Menu
                </NavLink>
                <NavLink className="nav-link" to="/chisiamo">
                  Chi siamo
                </NavLink>
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
      <div className="text-dark bg-nav w-100 p-4 text-center">
        Powered by Francesco Grassi
        <span className=" w-100 text-center p-3">
          <a
            href="https://www.linkedin.com/in/francesco-grassi-6a8455165/"
            target="_blank"
            rel="noopener"
            className="foot m-5"
          >
            <BsLinkedin className="m-1" />
            LinkedIn
          </a>
          <a
            href="https://github.com/francescograssi5"
            target="_blank"
            rel="noopener"
          >
            <BsGithub className="m-1" />
            Git
          </a>
        </span>
      </div>
    </>
  );
};

export default MainLayout;
