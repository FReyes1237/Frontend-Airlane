import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css';
import swal from 'sweetalert';
import styl from '../Tools/Style';
import { Container, Typography, Button, TextField, ListItem, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Factura from '../Content/Factura';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Content() {

    function handleSubmit(event) {
        swal({
            title: "Procesando",
            text: "Estamos validando su numero",
            icon: "https://i.pinimg.com/originals/d2/f3/8a/d2f38a05e3f36e1f7c4a1a8fb1a18dfa.gif",
            button: "Aceptar"
        });
        event.preventDefault();
    }

    return (
        <Container maxWidth="xs">
            <div style={styl.paper}>
                <Typography component="h1" variant="h5">
                    Ingrese su número de reserva
            </Typography>
                <form style={styl.form} onSubmit={handleSubmit}>
                    <TextField variant="outlined" label="Numero de reserva" name="nreserva" fullWidth margin="nreserva" />
                    <Button type="submit" fullWidth="contained" color="primary" style={styl.submit}>Verificar</Button>
                </form>
            </div>
            <router>
                <Link className="navbar-text" to="/Factura" target="_self">Verificar&nbsp;&nbsp;</Link>
            </router>
        </Container>
    );
};

export default Content;