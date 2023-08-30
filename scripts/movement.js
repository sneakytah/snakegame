export class Movement {
    constructor() {
        this.direction = { dx: 0, dy: 0 };
        this.movementMap = {
            'ArrowUp': {dx: 0, dy: -1},
            'ArrowDown': {dx: 0, dy: 1},
            'ArrowLeft': {dx: -1, dy: 0},
            'ArrowRight': {dx: 1, dy: 0}
        };
        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    handleKeydown(event) {
        const move = this.movementMap[event.key];
        if (move && (move.dx !== -this.direction.dx || move.dy !== -this.direction.dy)) {
            this.direction = move;
        }
    }

    resetDirection() {
        return this.direction = { dx: 0, dy: 0 };
    }
}