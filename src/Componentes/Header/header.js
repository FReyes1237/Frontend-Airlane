import React from 'react'
import './header.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const header = () => {
    return (
        <div>
            <div className="header">
                <Navbar bg="secondary" expand="lg">
                    <Navbar.Brand href="#home">Aerolinea Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link to="/">Página Principal</Nav.Link>
                            <Nav.Link href="#link">Compra de tickets</Nav.Link>
                            <Nav.Link href="#link">Calendario de vuelos</Nav.Link>
                            <Nav.Link to="Componentes/Content/Aeronave.js">Lista de Aeronaves y disponibilidad de butacas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default header;