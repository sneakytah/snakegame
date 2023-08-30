import { Snake } from "./snake.js";
import { SnakeController } from "./controllers/snake-controller.js";
import { Food } from "./food.js";
import { FoodController } from "./controllers/food-controller.js";
import { ScoreboardController } from "./controllers/scoreboard-controller.js";
import { Movement } from "./movement.js";

export const BOX_SIZE = 20;
const GAME_SPEED = 100;
const scoreElement = document.getElementById('score');
const highestScoreElement = document.getElementById('highest-score');

export class Game {
    constructor() {
        this.initializeGame()
        this.initializeControllers()
        this.gameLoop()
    }

    initializeGame() {
        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');
        this.CANVAS_SIZE = this.canvas.width / BOX_SIZE;
        this.movement = new Movement();
    }

    initializeControllers() {
        this.snake = new Snake();
        this.snakeController = new SnakeController(this.snake, this.context, BOX_SIZE);
        this.food = new Food(this.snake, this.CANVAS_SIZE);
        this.foodController = new FoodController(this.food, this.context, BOX_SIZE);
        this.scoreboard = new ScoreboardController(scoreElement, highestScoreElement);
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    isSnakeCollidingWithFood() {
        return this.snake.checkCollisionWithFood(this.food.position);
    }

    handleFoodCollision() {
        this.snake.grow();
        this.food.generate();
        this.scoreboard.incrementScore();
    }

    updateSnakePosition() {
        this.snake.move(this.movement.direction)
    }

    drawGameObjects() {
        this.snakeController.draw(this.context);
        this.foodController.draw();
    }

    resetGame() {
        this.snake.reset();
        this.movement.resetDirection()
        this.scoreboard.resetScore();
    }

    checkForGameOver() {
        if (this.snake.checkCollisionWithSelf() || this.snake.checkCollisionWithWalls(this.CANVAS_SIZE)) {
            this.resetGame()
        }
    }

    gameLoop() {
        this.clearCanvas()

        if (this.isSnakeCollidingWithFood()) {
            this.handleFoodCollision()
        }

        this.updateSnakePosition()
        this.drawGameObjects()
        this.checkForGameOver()

        setTimeout(this.gameLoop.bind(this), GAME_SPEED);
    }
}
