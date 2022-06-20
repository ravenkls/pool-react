import { BallColour } from "../components/Ball";
import { v4 as uuidv4 } from "uuid";

export class Ball {
  friction: number = 0.05;
  x: number = 0;
  y: number = 0;
  radius: number = 0;
  velocityX: number = 0;
  velocityY: number = 0;
  colour: BallColour;
  id: string;

  constructor(
    x: number,
    y: number,
    radius: number,
    velocityX: number,
    velocityY: number,
    colour: BallColour
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.colour = colour;
    this.id = uuidv4();
  }

  update(delta: number) {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.velocityX *= 1 - this.friction;
    this.velocityY *= 1 - this.friction;
  }
}
