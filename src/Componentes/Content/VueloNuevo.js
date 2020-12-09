import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import styl from '../Tools/Style';
import { Container, Typography, Button, TextField, ListItem, ListItemText } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { guardarVuelo } from '../../Actions/VueloAction';

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

    const [vuelo, setVuelo] = useState({
        vueloID: '',
        estadoVueloID: '',
        calendarioID: ''
    });

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setVuelo(anterior => ({
            ...anterior,
            [name]: value
        }))
    }

    const nuevoVueloBoton = e => {
        e.preventDefault();
        guardarVuelo(vuelo).then(response => {
            swal({
                title: "Felicidades!",
                text: "Guardado exitoso",
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
                    Nuevo Vuelo
                </Typography>
                <form style={styl.form}>
                    <TextField variant="outlined" label="Ingrese el numero del vuelo" name="vueloID" value={vuelo.vueloID} onChange={ingresarValoresMemoria} fullWidth margin="normal" />
                    <TextField variant="outlined" label="Ingrese el estado del vuelo" name="estadoVueloID" value={vuelo.estadoVueloID} onChange={ingresarValoresMemoria} fullWidth margin="normal" />
                    <TextField variant="outlined" label="Ingrese el numero de agenda" name="calendarioID" value={vuelo.calendarioID} onChange={ingresarValoresMemoria} fullWidth margin="normal" />
                    <Button type="submit" onClick={nuevoVueloBoton} fullWidth="contained" color="primary" style={styl.submit}>Guardar</Button>
                </form>
            </div>
        </Container>
    );
};

export default Content;