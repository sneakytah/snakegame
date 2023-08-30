const FOOD_COLOR = 'red';

export class FoodController {
    constructor(food, context, boxSize) {
        this.food = food
        this.context = context
        this.boxSize = boxSize;
    }

    draw() {
        this.context.fillStyle = FOOD_COLOR;
        this.context.fillRect(this.food.position.x * this.boxSize, this.food.position.y * this.boxSize, this.boxSize, this.boxSize);
    }
}