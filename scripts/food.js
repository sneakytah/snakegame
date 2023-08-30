export class Food {
    constructor(snake, CANVAS_SIZE) {
        this.snake = snake;
        this.CANVAS_SIZE = CANVAS_SIZE;
        this.position = {};
        this.generate();
    }

    isPositionInSnakeBody() {
        return this.snake.body.some(segment => segment.x === this.position.x && segment.y === this.position.y)
    }

    generate() {
        do {
            this.position = {
                x: Math.floor(Math.random() * this.CANVAS_SIZE),
                y: Math.floor(Math.random() * this.CANVAS_SIZE)
            };
        } while (this.isPositionInSnakeBody())
    }
}
