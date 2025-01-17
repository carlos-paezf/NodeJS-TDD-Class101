const GuessingGame = require("../src");


describe("Juego de Adivinanza de Números", () => {
    let game;

    beforeEach(() => {
        game = new GuessingGame();
        game.target = 50;
    });

    it("Debe generar un número entre 1 y 100", () => {
        const number = game.generateNumber();

        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(100);
    });

    it("Debe responder 'muy alto' si la adivinanza es mayor al número objetivo", () => {
        expect(game.guess(60)).toBe("muy alto");
    });

    it("Debe responder 'muy bajo' si la adivinanza es menor al objetivo", () => {
        expect(game.guess(30)).toBe("muy bajo");
    });

    it("Debe responder 'correcto' si la adivinanza coincide con el objetivo", () => {
        expect(game.guess(50)).toBe("correcto");
    });
});


describe("Avanzado - Interactividad con Node.js", () => {
    let game;
    let mockQuestion;
    let mockClose;

    beforeEach(() => {
        game = new GuessingGame();
        game.target = 50;

        mockQuestion = jest.fn();
        mockClose = jest.fn();

        jest.spyOn(require("readline"), "createInterface").mockReturnValue({
            question: mockQuestion,
            close: mockClose,
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Debe iniciar el juego y responder 'correcto' cuando el usuario acierte", () => {
        mockQuestion.mockImplementationOnce((prompt, callback) => {
            expect(prompt).toBe("¿Cuál es tu número? ");
            callback("50");
        });

        game.play();

        expect(mockQuestion).toHaveBeenCalled();
        expect(mockClose).toHaveBeenCalled();
    });

    it("Debe continuar preguntando cuando la entrada es inválida o incorrecta", () => {
        mockQuestion
            .mockImplementationOnce((prompt, callback) => callback("not a number"))
            .mockImplementationOnce((prompt, callback) => callback("30"))
            .mockImplementationOnce((prompt, callback) => callback("50"));

        game.play();

        expect(mockQuestion).toHaveBeenCalledTimes(3);
        expect(mockClose).toHaveBeenCalled();
    });
});