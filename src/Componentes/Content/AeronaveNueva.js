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
import { guardarAeronave } from '../../Actions/AeronaveAction';

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

    const [aeronave, setAeronave] = useState({
        aeronaveID: '',
        modelo: ''
    });

    const ingresarValoresMemoria = e => {
        const { name, value } = e.target;
        setAeronave(anterior => ({
            ...anterior,
            [name]: value
        }))
    }

    const nuevaAeronaveBoton = e => {
        e.preventDefault();
        guardarAeronave(aeronave).then(response => {
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
                    Nueva Aeronave
                </Typography>
                <form style={styl.form}>
                    <TextField variant="outlined" label="Ingrese el numero de la aeronave" name="aeronaveID" value={aeronave.butacaID} onChange={ingresarValoresMemoria} fullWidth margin="normal" />
                    <TextField variant="outlined" label="Ingrese el modelo de la aeronave" name="modelo" value={aeronave.aeronaveID} onChange={ingresarValoresMemoria} fullWidth margin="normal" />
                    <Button type="submit" onClick={nuevaAeronaveBoton} fullWidth="contained" color="primary" style={styl.submit}>Guardar</Button>
                </form>
            </div>
        </Container>
    );
};

export default Content;