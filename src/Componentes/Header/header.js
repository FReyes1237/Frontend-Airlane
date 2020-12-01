import React from 'react'
import './header.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aeronave from '../Content/Aeronave';
import ListVue from '../Content/ListaVuelos';
import Butaca from '../Content/Butaca';
import CViaje from '../Content/ClaseViaje';
import Vuelo from '../Content/Vuelo';

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
                                <Link to="/LVuelo">Lista de vuelos</Link>
                                <Link to="/ListaButacas">Lista de butacas</Link>
                                <Link to="/CVuelo">Categorias de vuelo</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/" exact component={ListVue}/>
                    <Route path="/ListaDeAeronaves" exact component={Aeronave} />
                    <Route path="/ListaButacas" exact component={Butaca} />
                    <Route path="/CVuelo" exact component={CViaje} />
                    <Route path="/LVuelo" exact component={Vuelo} />
                </div>
            </div>
        </Router>
    );
};

export default header;