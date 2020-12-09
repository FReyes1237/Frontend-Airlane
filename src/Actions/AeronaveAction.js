import HttpCliente from '../Servicios/HttpCliente';

export const guardarAeronave = aeronave => {
    return new Promise((resolve, eject) => {
        HttpCliente.post("/Aeronaves/NuevaAeronave", aeronave).then(response => {
            resolve(response);
        });
    })
}