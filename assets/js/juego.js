let deck = [];

let tipos = ["C", "D", "H", "S"];

let cartaLetras = ["A", "J", "Q", "K"];

let marcadorPlayer = 0;
let marcadorPC = 0;

// referencias HTML
const btnPedirCarta = document.querySelector("#btnPedirCarta");
const btnNuevoJuego = document.querySelector("#btnNuevoJuego");
const btnDetenerJuego = document.querySelector("#btnDetenerJuego");
const puntajes = document.querySelectorAll(".puntaje");

const puntajePlayer = puntajes[0];
const puntajePC = puntajes[1];

// Esta funcion ordena un arreglo de manera aleatoria y lo retorna

const shuffle = (target) => {
    let arr = [];

    for (i = 0; target.length != arr.length; i++) {
        let sort = Math.floor(Math.random() * (target.length - 0) + 0);

        if (!arr.find((check) => check == target[sort])) {
            arr.push(target[sort]);
        }
    }

    return arr;
};

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let letra of cartaLetras) {
        for (let tipo of tipos) {
            deck.push(letra + tipo);
        }
    }

    deck = shuffle(deck);
    return deck;
};

crearDeck();

// funcion que toma una carta del arreglo deck y lo muestra al usuario

const tomarCarta = () =>
    deck[0] ? deck.pop() : console.error("No hay mas cartas en el deck");

// funcion que determina el valor numerico de una carta

const valorCarta = (carta) => {
    let valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// EVENTOS
btnPedirCarta.addEventListener("click", () => {
    const carta = tomarCarta();

    carta
        ? (marcadorPlayer += valorCarta(carta))
        : alert("Se terminaron las cartas");

    puntajePlayer.innerText = marcadorPlayer;
});
