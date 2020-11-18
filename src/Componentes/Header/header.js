import React from 'react'
import './header.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aeronave from '../Content/Aeronave';

const header = () => {
    return (
        <Router>
            <div>
                <div className="header">
                    <Navbar bg="secondary" expand="lg">
                        <Navbar.Brand href="#home">Aerolinea Online</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link to="/">Página Principal</Nav.Link>
                                <Nav.Link to="/ct">Compra de tickets</Nav.Link>
                                <Nav.Link to="/calendar">Calendario de vuelos</Nav.Link>
                                <Nav.Link to="/listaAero">Lista de Aeronaves y disponibilidad de butacas</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/listaAero" exact component={Aeronave} />
                </div>
            </div>
        </Router>
    );
};

export default header;