import React from 'react';
import { Navbar, Nav,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aeronave from '../Content/Aeronave';
import Butaca from '../Content/Butaca';
import CViaje from '../Content/ClaseViaje';
import Vuelo from '../Content/Vuelo';
import Facturar from '../Content/FacturaReserva';
import Factura from '../Content/Factura';
import Reserva from '../Content/Reserva';
import Politica from '../Content/Politica';
import ButacaNueva from '../Content/ButacaNueva';
import AeronaveNueva from '../Content/AeronaveNueva';
import VueloNuevo from '../Content/VueloNuevo';
import PruebaAIAIAI from '../Content/Prueba';

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
                    <Link className="navbar-text" to="/Reservar">Reservar pasaje&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/Facturar">Comprar pasaje&nbsp;&nbsp;</Link>
                    <Link className="navbar-text" to="/Prueba">Prueba</Link>
                </Nav>
            </Navbar>
            <br></br>
            <Route path="/ListaDeAeronaves" exact component={Aeronave} />
            <Route path="/ListaButacas" exact component={Butaca} />
            <Route path="/CVuelo" exact component={CViaje} />
            <Route path="/LVuelo" exact component={Vuelo} />
            <Route path="/Facturar" exact component={Facturar} />
            <Route path="/Factura" exact component={Factura} />
            <Route path="/Reservar" exact component={Reserva} />
            <Route path="/politica" exact component={Politica} />
            <Route path="/ButacaNueva" exact component={ButacaNueva} />
            <Route path="/AeronaveNueva" exaact component={AeronaveNueva} />
            <Route path="/VueloNuevo" exaact component={VueloNuevo} />
            <Route path="/Prueba" exact component={PruebaAIAIAI} />
        </Router>
    );
};

export default header;