import { Score } from '../score.js';

export class ScoreboardController {
    #score;
    #scoreElement;
    #highestScoreElement;

    constructor(scoreElement, highestScoreElement, initialHighestScore = +localStorage.getItem('highestScore') || 0) {
        this.#score = new Score(initialHighestScore);
        this.#scoreElement = scoreElement;
        this.#highestScoreElement = highestScoreElement;
        this.refreshScore();
    }

    refreshScore() {
        this.#scoreElement.textContent = this.#score.current;
        this.#highestScoreElement.textContent = this.#score.highest;
    }

    incrementScore() {
        this.#score.increment();
        this.refreshScore();
        localStorage.setItem('highestScore', this.#score.highest);
    }

    resetScore() {
        this.#score.reset();
        this.refreshScore();
        localStorage.setItem('highestScore', this.#score.highest);
    }
}