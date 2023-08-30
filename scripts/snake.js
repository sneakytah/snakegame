export class Snake {
    constructor(initialPosition = { x: 10, y: 10}) {
        this.body = [initialPosition]
    }

    move(direction) {
        const head = { ...this.body[0] };
        head.x += direction.dx;
        head.y += direction.dy;
        this.body.unshift(head);
        this.body.pop();
    }

    grow() {
        this.body.push({});
    }

    reset(initialPosition = { x: 10, y: 10 }) {
        this.body = [initialPosition];
    }

    checkCollisionWithFood(foodPosition) {
        const head = this.body[0];
        return head.x === foodPosition.x && head.y === foodPosition.y;
    }

    checkCollisionWithSelf() {
        const [head, ...body] = this.body;
        return body.some(segment => segment.x === head.x && segment.y === head.y);
    }

    checkCollisionWithWalls(CANVAS_SIZE) {
        const head = this.body[0];
        return head.x < 0 || head.x >= CANVAS_SIZE || head.y < 0 || head.y >= CANVAS_SIZE;
    }
}

