let deck = [];

let tipos = ["C", "D", "H", "S"];

let cartaLetras = ["A", "J", "Q", "K"];

const shuffle = (target) => {
    let arr = [];

    for (i = 0; target.length != arr.length; i++) {
        
        let sort = Math.floor(Math.random() * (target.length - 0) + 0);

        if (!arr.find(check => check == target[sort])) {
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
