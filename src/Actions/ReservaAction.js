import HttpCliente from '../Servicios/HttpCliente';

export const guardarReserva = reserva => {
    return new Promise((resolve, eject) => {
        HttpCliente.post("/Reservas/NuevaReserva", reserva).then(response => {
            resolve(response);
        });
    })
}