import React, { Component } from "react";
import { Navbar, Nav, link } from "react-bootstrap";
import Logo from './component/logo.jpg'
import 

const navbar = () => {
    return (
    <div>
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Portofolio</Nav.Link>
            <Nav.Link href="#link">Article</Nav.Link>
            <Nav.Link href="#link">Hire Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  };
  
  export default Navbar;
  