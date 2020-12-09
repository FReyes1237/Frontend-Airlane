import HttpCliente from '../Servicios/HttpCliente';

export const guardarVuelo = vuelo => {
    return new Promise((resolve, eject) => {
        HttpCliente.post("/Vuelos/NuevoVuelo", vuelo).then(response => {
            resolve(response);
        });
    })
}