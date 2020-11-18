import React from 'react'
import './header.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aeronave from '../Content/Aeronave';
import ListVue from '../Content/ListaVuelos';

function header() {
    return (
        <Router>
            <div>
                <div className="header">
                    <Navbar bg="secondary" expand="lg">
                        <Navbar.Brand href="#home">Aerolinea Online</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/">Página Principal</Link>
                                <Nav.Link to="/ct">Compra de tickets</Nav.Link>
                                <Nav.Link to="/calendar">Calendario de vuelos</Nav.Link>
                                <Link to="/ListaDeAeronaves">Lista de Aeronaves y disponibilidad de butacas</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/" exact component={ListVue}/>
                    <Route path="/ListaDeAeronaves" exact component={Aeronave} />
                </div>
            </div>
        </Router>
    );
};

export default header;