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

function Content() {

    function handleSubmit(event) {
        swal({
            title: "Felicidades!",
            text: "Tu compra ha sido completada satisfactoriamente",
            icon: "https://i.pinimg.com/originals/d2/f3/8a/d2f38a05e3f36e1f7c4a1a8fb1a18dfa.gif",
            button: "Aceptar"
        });
        event.preventDefault()
    }

    const baseUrl = "https://localhost:44345/api/Reservas";
    const [data, setData] = useState([]);

    const peticionesGet = async () => {
        await axios.get(baseUrl)
            .then(Response => {
                setData(Response.data);
            }).catch(error => {
                console.error();
            });
    }

    useEffect(() => {
        peticionesGet();
    }, [])

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

    return (
        <Container maxWidth="xs">
            <div style={styl.paper}>
                <Typography component="h1" variant="h5">
                    Compra de boleto
                </Typography>
                <form style={styl.form} onSubmit={handleSubmit}>
                    <TextField variant="outlined" label="Nombre Completo" name="name" fullWidth margin="normal" />
                    <TextField id="date" variant="outlined" type="date" fullWidth margin="normal" />
                    <TableContainer component={Paper}>
                        <Table className={styl.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Reserva ID</StyledTableCell>
                                    <StyledTableCell align="center">Cliente ID</StyledTableCell>
                                    <StyledTableCell align="center">Butaca ID</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(Reserva => (
                                    <StyledTableRow key={Reserva.reservaID}>
                                        <StyledTableCell align="center" component="th" scope="row">
                                            {Reserva.reservaID}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{Reserva.clienteID}</StyledTableCell>
                                        <StyledTableCell align="center">{Reserva.butacaID}</StyledTableCell>
                                    </StyledTableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TextField variant="outlined" label="Numero de Tarjeta" name="nt" fullWidth margin="normal" />
                    <TextField variant="outlined" label="CVV" name="cvv" fullWidth margin="normal" />
                    <Button type="submit" fullWidth="contained" color="primary" style={styl.submit}>Pagar</Button>
                </form>
            </div>
        </Container>
    );
};

export default Content;