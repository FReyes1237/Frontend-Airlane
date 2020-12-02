import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css';
import swal from 'sweetalert';
import styl from '../Tools/Style';
import { Container, Typography, Button, TextField, ListItem, ListItemText } from '@material-ui/core';

function Content() {

    function handleSubmit(event) {
        swal({
            title: "Felicidades!",
            text: "Tu compra ha sido completada satisfactoriamente",
            icon: "https://i.pinimg.com/originals/d2/f3/8a/d2f38a05e3f36e1f7c4a1a8fb1a18dfa.gif",
            button: "Aceptar",
        });
        event.preventDefault()
    }

    return (
        <Container maxWidth="xs">
            <div style={styl.paper}>
                <Typography component="h1" variant="h5">
                    Compra de boleto
            </Typography>
                <form style={styl.form} onSubmit={handleSubmit}>
                    <TextField variant="outlined" label="Nombre Completo" name="name" fullWidth margin="normal" />
                    <TextField id="date" variant="outlined" type="date" fullWidth margin="normal" />
                    <TextField variant="outlined" label="Numero De Reserva" name="reserva" fullWidth margin="normal" />
                    <ListItem button divider>
                        <ListItemText primary="Boleto primera clase butaca 12"/>
                    </ListItem>
                    <ListItem button divider>
                        <ListItemText primary="Boleto en la maleta maleta 20"/>
                    </ListItem>
                    <TextField variant="outlined" label="Numero de Tarjeta" name="nt" fullWidth margin="normal" />
                    <TextField variant="outlined" label="CVV" name="cvv" fullWidth margin="normal" />
                    <Button type="submit" fullWidth="contained" color="primary" style={styl.submit}>Pagar</Button>
                </form>
            </div>
        </Container>
    );
};

export default Content;