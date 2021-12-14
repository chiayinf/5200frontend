import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown, Form, FormControl } from "react-bootstrap";
export default function CustNav() {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Seattle Crime Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home Page</Nav.Link>
                <Nav.Link href="#link">Search Report</Nav.Link>
                <Nav.Link href="#link">Create new Report</Nav.Link>
                
                <Nav.Link href="#link">Demo Charts</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
