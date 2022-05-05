import React from "react";
import style from "./NavBar.module.css";
import {Container, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { LinkContainer } from "react-router-bootstrap";


const NavBar = (props) => {

  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="primary" variant="dark">
        <Container>
        <LinkContainer to="/"><Navbar.Brand>Meme Generator</Navbar.Brand></LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/new"><Nav.Link>New</Nav.Link></LinkContainer>
          <LinkContainer to="/editor"><Nav.Link>Edit</Nav.Link></LinkContainer>
          <LinkContainer to="/editor/1"><Nav.Link>Edit/1</Nav.Link></LinkContainer>
          <LinkContainer to="/thumbnail"><Nav.Link>Thumbnail</Nav.Link></LinkContainer>
          <LinkContainer to="/thumbnailPDF"><Nav.Link>ThumbnailPDF</Nav.Link></LinkContainer>
        </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;