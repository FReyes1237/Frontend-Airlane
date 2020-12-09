import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import swal from 'sweetalert';
import styl from '../Tools/Style';
import { BrowserRouter as Link } from "react-router-dom";
import { Container, Typography, Button, TextField } from '@material-ui/core';
import { guardarReserva } from '../../Actions/ReservaAction';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useEffect, useState } from 'react';

function Content() {

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: "#354e71",
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const [reserva, setReserva] = useState({
        reservaID: '',
        username: '',
        butacaID: ''
    });

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setReserva(anterior => ({
            ...anterior,
            [name]: value
        }))
    }

    const nuevaReservaBoton = e => {
        e.preventDefault();
        guardarReserva(reserva).then(response => {
            swal({
                title: "Felicidades!",
                text: "Su butaca ha sido reservada exitosamente",
                icon: "https://i.pinimg.com/originals/d2/f3/8a/d2f38a05e3f36e1f7c4a1a8fb1a18dfa.gif",
                button: "Aceptar"
            });
            window.localStorage.setItem('token_seguridad', response.data.token);
        })
    }

    return (
        <Container maxWidth="xs">
            <div style={styl.paper}>
                <Typography component="h1" variant="h5">
                    Compra de boleto
            </Typography>
                <form style={styl.form}>
                    <TextField variant="outlined" label="Numero de Reserva" name="reservaID" value={reserva.reservaID} fullWidth margin="normal" />
                    <TextField variant="outlined" label="Nombre de Usuario" name="username" value={reserva.username} fullWidth margin="normal" />
                    <TextField variant="outlined" label="Numero de Butaca" name="butacaID" value={reserva.butacaID} fullWidth margin="normal" />
                    <Button type="submit" onClick={nuevaReservaBoton} fullWidth="contained" color="primary" style={styl.submit}>Reservar</Button>
                </form>
            </div>
            <router>
                <Link className="navbar-text" to="/politica" target="_blank">Politica de reserva&nbsp;&nbsp;</Link>
            </router>
        </Container>
    );
};

export default Content;