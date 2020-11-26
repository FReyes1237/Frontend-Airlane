import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css'

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

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Butaca ID</th>
                        <th>Aeronave</th>
                        <th>Clase</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(Butaca => (
                        <tr key={Butaca.butacaID}>
                            <td>{Butaca.butacaID}</td>
                            <td>{Butaca.aeronaveID}</td>
                            <td>{Butaca.claseViajeID}</td>
                            <td>{Butaca.estadoButacaID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Content;