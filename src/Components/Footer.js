import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return( 
        <>
           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCopyright} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <p className="my-3 copyright">Copyrights All Rihts Reserved</p>
            <p className="my-3 owner">Made By -Nashrah Ansari</p>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
    
}

export default Footer

