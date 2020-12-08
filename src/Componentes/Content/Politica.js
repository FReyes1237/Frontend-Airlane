import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import styl from '../Tools/Style';
import { Container, Typography } from '@material-ui/core';

function Content() {

    return (
        <Container maxWidth="xs">
            <div style={styl.paper}>
                <Typography component="h1" variant="h5">
                    Politica
                </Typography>
                <p>La reservación es gratuita pero debera pagarla a mas tardar una semana luego de la compra.<br></br>
                Si no realiza la compra se le debitará el total mas un 15% sobre el monto.
                </p>
            </div>
        </Container>
    );
};

export default Content;