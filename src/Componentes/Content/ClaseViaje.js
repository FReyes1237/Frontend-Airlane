import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css'

function Content() {

    const baseUrl = "https://localhost:44345/api/ClaseViajes";
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
                        <th>Categoria ID</th>
                        <th>Categoria De Vueo</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(ClaseViaje => (
                        <tr key={ClaseViaje.claseViajeID}>
                            <td>{ClaseViaje.claseViajeID}</td>
                            <td>{ClaseViaje.nombreClase}</td>
                            <td>{ClaseViaje.descripción}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Content;