import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">BTG Pactual.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/funds">Fondos</Nav.Link>
                        <Nav.Link href="/transactions">Transacciones</Nav.Link>
                        <Nav.Link href="/user/1">Perfil</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
