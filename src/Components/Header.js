import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Container,Nav,Navbar} from 'react-bootstrap';
import logo from '../image/morgan.png'


function Header() {
    return(
        <>
          <Navbar className="NB navbar fixed-top bg-white shadow" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
          <Nav className="me-auto">


            <NavLink className="page" to="/">Home</NavLink>
            <NavLink className="pages" to="/About">About Us</NavLink>
            <NavLink className="pages" to="/Services">Services</NavLink>
            <NavLink className="pages" to="/Blogs">Blogs</NavLink>
            <NavLink className="pages" to="/ContactUs">Contact Us</NavLink>

          </Nav>
        </Container>
      </Navbar>

        </>
    )
    
}

export default Header