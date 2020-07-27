import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { Component } from "react";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

export default class navbar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">SHOPMAN</Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">NEW IN</Nav.Link>
              <NavDropdown title="CLOTHING" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">FOOTWEAR</Nav.Link>
              <Nav.Link href="#pricing">ACESSORIES</Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
          <Nav.Link eventKey={2} href="#memes">
            <FiSearch className="navbar-icon" />
          </Nav.Link>
          <Nav.Link href="#deets">
            <FaRegUser className="navbar-icon" />
          </Nav.Link>
          <Nav.Link href="#deets">
            <FiShoppingCart className="navbar-icon" />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <FaRegHeart className="navbar-icon" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
      </>
    );
  }
}
