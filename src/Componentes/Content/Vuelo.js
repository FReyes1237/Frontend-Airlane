import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './content.css'

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

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Vuelo ID</th>
                        <th>Estado Del Vuelo</th>
                        <th>Calendario</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(Vuelo => (
                        <tr key={Vuelo.vueloID}>
                            <td>{Vuelo.vueloID}</td>
                            <td>{Vuelo.estadoVueloID}</td>
                            <td>{Vuelo.calendarioID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Content;