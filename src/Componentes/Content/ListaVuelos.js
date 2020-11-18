import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css'

function Content() {

    const baseUrl = "https://localhost:44345/api/Aeronaves";
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
            <h1>Proximos vuelos</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Pais Salida</th>
                        <th>Pais Destino</th>
                        <th>Hora salida</th>
                        <th>Hora Llegada</th>
                        <th>Aeronave</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(Aeronave => (
                        <tr key={Aeronave.aeronaveID}>
                            <td>{Aeronave.aeronaveID}</td>
                            <td>{Aeronave.modelo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Content;