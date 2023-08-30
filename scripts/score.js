export class Score {
    #currentScore = 0;
    #highestScore = 0;

    constructor(initialHighestScore = 0) {
        this.#highestScore = initialHighestScore;
    }

    get current() {
        return this.#currentScore;
    }

    set current(value) {
        this.#currentScore = value;
        if (this.#currentScore > this.#highestScore) {
            this.#highestScore = this.#currentScore;
        }
    }

    get highest() {
        return this.#highestScore;
    }

    increment() {
        this.current += 1;
    }

    reset() {
        this.#currentScore = 0;
    }
}

