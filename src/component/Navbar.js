import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Navbars = () => {
    return (
    <div>
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/portfolio'>Portofolio</Link></Nav.Link>
            <Nav.Link><Link to='/article'>Article</Link></Nav.Link>
            <Nav.Link><Link to='/hireme'>Hire Me</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  };
  
  export default Navbars;
  