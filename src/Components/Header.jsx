import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillHome} from "react-icons/ai";
import {FaRegistered } from "react-icons/fa";
import {MdContactSupport, } from "react-icons/md";
import {RiGalleryFill } from "react-icons/ri";
import {BiLogInCircle } from "react-icons/bi";
function Header() {
  return (
    <Navbar bg="secondary"  className='header'>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fs-3"
            style={{ maxHeight:'100px' }}
            navbarScroll
          >
            <Nav.Link href="javascript:route('#home')"><AiFillHome/>Home</Nav.Link>
            <Nav.Link href="javascript:route('#about')"><MdContactSupport/>About us</Nav.Link>
            <Nav.Link href="javascript:route('#register')"><FaRegistered/>Register</Nav.Link>
            <Nav.Link href="javascript:route('#product')"><RiGalleryFill/>Product</Nav.Link>
            <Nav.Link href="javascript:route('#gallery')"><RiGalleryFill/>Gallery</Nav.Link>
            <Nav.Link href="javascript:route('#login')"><BiLogInCircle/>Login</Nav.Link>
             
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;