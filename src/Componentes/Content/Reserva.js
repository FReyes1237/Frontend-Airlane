import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import swal from 'sweetalert';
import styl from '../Tools/Style';
import { BrowserRouter as Link } from "react-router-dom";
import { Container, Typography, Button, TextField, ListItem, ListItemText } from '@material-ui/core';

function Content() {

    function handleSubmit(event) {
        swal({
            title: "Felicidades!",
            text: "Tu reserva ha sido completada satisfactoriamente",
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
                    <TextField variant="outlined" label="Numero de Reserva" name="numreserva" fullWidth margin="normal" />
                    <TextField variant="outlined" label="Nombre de Usuario" name="name" fullWidth margin="normal" />
                    <TextField variant="outlined" label="Numero de Butaca" name="reserva" fullWidth margin="normal" />
                    <Button type="submit" fullWidth="contained" color="primary" style={styl.submit}>Reservar</Button>
                </form>
            </div>
            <router>
                <Link className="navbar-text" to="/politica" target="_blank">Politica de reserva&nbsp;&nbsp;</Link>
            </router>
        </Container>
    );
};

export default Content;