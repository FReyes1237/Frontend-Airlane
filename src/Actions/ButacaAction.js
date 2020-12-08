import HttpCliente from '../Servicios/HttpCliente';

export const guardarButaca = butaca => {
    return new Promise((resolve, eject) => {
        HttpCliente.post("/Butacas/NuevaButaca", butaca).then(response => {
            resolve(response);
        });
    })
}