const SNAKE_COLOR = 'green';

export class SnakeController {
    constructor(snake, context, boxSize) {
        this.snake = snake;
        this.context = context;
        this.boxSize = boxSize;
    }

    draw() {
        this.snake.body.forEach(segment => {
            this.context.fillStyle = SNAKE_COLOR;
            this.context.fillRect(segment.x * this.boxSize, segment.y * this.boxSize, this.boxSize, this.boxSize)
        })
    }
}