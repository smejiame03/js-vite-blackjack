
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    // <!-- <img class="carta" src="assets/cartas/10D.png"> -->
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
};
