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
import { Container } from '@material-ui/core';

function Content() {

    const baseUrl = "https://localhost:44345/api/Butacas";
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

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: "#354e71",
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={styl.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Butaca ID</StyledTableCell>
                            <StyledTableCell align="center">Aeronave</StyledTableCell>
                            <StyledTableCell align="center">Clase</StyledTableCell>
                            <StyledTableCell align="center">Estado</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(Butaca => (
                            <StyledTableRow key={Butaca.butacaID}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {Butaca.butacaID}
                                </StyledTableCell>
                                <StyledTableCell align="center">{Butaca.aeronaveID}</StyledTableCell>
                                <StyledTableCell align="center">{Butaca.claseViajeID}</StyledTableCell>
                                <StyledTableCell align="center">{Butaca.estadoButacaID}</StyledTableCell>
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Content;