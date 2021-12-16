let deck = [];

let tipos = ["C", "D", "H", "S"];

let cartaLetras = ["A", "J", "Q", "K"];

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
    console.log(deck);

    return deck;
};

crearDeck();

// funcion que toma una carta del arreglo deck y lo muestra al usuario

const tomarCarta = () =>
    deck[0] ? deck.pop() : console.error("No hay mas cartas en el deck");

const CARTA = tomarCarta();

console.log(deck, CARTA);

// funcion que determina el valor numerico de una carta

const valorCarta = (carta) => {
    valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

console.log(valorCarta(CARTA));

