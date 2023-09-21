import _ from 'underscore';
import {crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora} from './usecases';
// import crearNuevoDeck, {miNombre} from './usecases/crear-deck'

// 2C = Two of clubs (tréboles)
// 2D = Two of diamonds (diamantes)
// 2H = Two of hearts (corazones)
// 2S = Two of spaces (espadas)

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];
//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

let puntosJugadores = [];

const puntosHTML = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartas');


//Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos,especiales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0);

    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;

}

//eventos
btnPedir.addEventListener('click', () => {
    //tomar carta del deck
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    //para que las cartas aparezcan en pantalla
    crearCarta(carta, 0, divCartasJugadores);

    //controlar puntos
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, deck, divCartasJugadores, puntosHTML);
    } else if (puntosJugador === 21) {
        console.warn('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, deck, divCartasJugadores, puntosHTML);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0],puntosJugadores,deck,divCartasJugadores, puntosHTML);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});