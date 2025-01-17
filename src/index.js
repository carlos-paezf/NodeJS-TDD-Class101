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
    generateNumber () { }

    /**
     * @param number: El número que el usuario ingresa 
     * @returns: Indica si el número del usuario es más alto, más bajo 
     * o es igual al número aleatorio del programa
     */
    guess (number) { }
}


module.exports = GuessingGame;