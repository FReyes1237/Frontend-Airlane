import React from 'react';
import { Navbar, Nav,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aeronave from '../Content/Aeronave';
import Butaca from '../Content/Butaca';
import CViaje from '../Content/ClaseViaje';
import Vuelo from '../Content/Vuelo';
import Factura from '../Content/Factura';

function header() {
    return (
        <Router>
            <Navbar className="navbar-custom">
                <Navbar.Brand className="navbar-brand" href="#home">Aerolinea Online</Navbar.Brand>
                <Nav>
                    <Link className="navbar-text" to="/calendar">Calendario de vuelos&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/ListaDeAeronaves">Lista de Aeronaves&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/LVuelo">Lista de vuelos&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/ListaButacas">Lista de butacas&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/CVuelo">Categorias de vuelo&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/Facturar">Comprar pasaje&nbsp;&nbsp;</Link>
                </Nav>
            </Navbar>
            <br></br>
            <Route path="/ListaDeAeronaves" exact component={Aeronave} />
            <Route path="/ListaButacas" exact component={Butaca} />
            <Route path="/CVuelo" exact component={CViaje} />
            <Route path="/LVuelo" exact component={Vuelo} />
            <Route path="/Facturar" exact component={Factura} />
        </Router>
    );
};

export default header;