const readline = require('readline');


class GuessingGame {
    /**
     * El constructor define cual sería el número objetivo el cual es 
     * generado de manera aleatoria
     */
    constructor () {
        this.target = this.generateNumber();
    }

    /**
     * @returns: Un número aleatorio entre 1 y 100 
     */
    generateNumber () {
        return Math.floor(Math.random() * 100) + 1;
    }

    /**
     * @param number: El número que el usuario ingresa 
     * @returns: Indica si el número del usuario es más alto, más bajo 
     * o es igual al número aleatorio del programa
     */
    guess (number) {
        if (number < this.target) return "muy bajo";
        else if (number > this.target) return "muy alto";
        return "correcto";
    }

    /**
     * Inicia el juego de adivinanza con interacción desde la consola.
     */
    play () {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        console.log("¡Bienvenido al Juego de Adivinanza de Números!");
        console.log("Adivina ún número entre 1 y 100");

        const ask = () => {
            rl.question('¿Cuál es tu número? ', (input) => {
                const guess = parseInt(input, 10);

                if (isNaN(guess)) {
                    console.log("Por favor, ingresa un número válido.");
                    ask();
                    return;
                }

                const response = this.guess(guess);
                console.log(response);

                if (response === 'correcto') {
                    console.log("¡Felicidades, ganaste!");
                    rl.close();
                } else {
                    ask();
                }
            });
        };

        ask();
    }
}

module.exports = GuessingGame;



const game = new GuessingGame();
game.play();