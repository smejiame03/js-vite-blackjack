
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('La computadora gana');
        } else if (puntosComputadora > 21) {
            alert('El jugador gana');
        } else {
            alert('La computadora gana');
        }
    }, 100);
}
