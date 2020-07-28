import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { Component } from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import Accordion from "react-bootstrap/Accordion";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

export default class navbar extends Component {
  state = {
    activeSearch: false,
  };
  handleclick = () => {
    this.setState((prevState) => {
      return {
        activeSearch: !prevState.activeSearch,
      };
    });
  };
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">SHOPMAN</Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/new">NEW IN</Nav.Link>
              <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      CLOTHING
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <NavDropdown.Item href="/clothing">
                          VIEW ALL CLOTHING
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/clothing/jackets">
                          JACKETS & COATS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/clothing/shirts">
                          SHIRTS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/clothing/jeans">
                          JEANS
                        </NavDropdown.Item>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      FOOTWEAR
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <NavDropdown.Item href="/footwear">
                          VIEW ALL FOOTWEAR
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/footwear/shoes">
                          SHOES
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/footwear/boots">
                          BOOTS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/footwear/slippers">
                          SLIPPERS
                        </NavDropdown.Item>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      ACCESSORIES
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <NavDropdown.Item href="/accessories">
                          VIEW ALL ACCESSORIES
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/accessories/bags">
                          BAGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/accessories/hats">
                          HATS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/accessories/sunglasses">
                          SUNGLASSES
                        </NavDropdown.Item>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </NavDropdown>
              <Nav.Link href="/sale" id="sale">
                SALE %
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {this.state.activeSearch && (
            <input type="text" placeholder="Search" className="mr-sm-2" />
          )}
          <Nav.Link eventKey={2} onClick={this.handleclick}>
            <FiSearch className="navbar-icon" />
          </Nav.Link>

          <Nav.Link href="/profile">
            <FaRegUser className="navbar-icon" />
          </Nav.Link>
          <Nav.Link href="/cart">
            <FiShoppingCart className="navbar-icon" />
          </Nav.Link>
          <Nav.Link eventKey={2} href="/like">
            <FaRegHeart className="navbar-icon" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
      </>
    );
  }
}
