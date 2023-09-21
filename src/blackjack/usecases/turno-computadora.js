import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { determinarGanador } from "./determinar-ganador";
import { crearCarta } from "./crearCarta";

//turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosJugadores, deck, divCartaJugadores, puntosHTML) => {
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1,puntosJugadores, puntosHTML);

        //para que las cartas aparezcan en pantalla
        crearCarta(carta, puntosJugadores.length - 1, divCartaJugadores);
        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
};