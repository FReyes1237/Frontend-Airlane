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
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Aeronave ID</th>
                        <th>Modelo</th>
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