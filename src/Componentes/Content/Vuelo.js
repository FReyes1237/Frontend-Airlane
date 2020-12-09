import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styl from '../Tools/Style';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';

function Content() {

    const baseUrl = "https://localhost:44345/api/Vuelos";
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
        <Container>
            <TableContainer component={Paper}>
                <Table className={styl.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Vuelo ID</StyledTableCell>
                            <StyledTableCell align="center">Estado Del Vuelo</StyledTableCell>
                            <StyledTableCell align="center">Agenda</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(Vuelo => (
                            <StyledTableRow key={Vuelo.vueloID}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {Vuelo.vueloID}
                                </StyledTableCell>
                                <StyledTableCell align="center">{Vuelo.estadoVueloID}</StyledTableCell>
                                <StyledTableCell align="center">{Vuelo.calendarioID}</StyledTableCell>
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <router>
                <Link className="navbar-text" to="/VueloNuevo" target="_self">Ingresar nuevo vuelo&nbsp;&nbsp;</Link>
            </router>
        </Container>
    );
};

export default Content;