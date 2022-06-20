import { BallColour } from "../components/Ball";
import { Ball } from "./Ball";

export class CueBall extends Ball {
  constructor(x: number, y: number, radius: number) {
    super(x, y, radius, 0, 0, BallColour.White);
  }

  shoot(mousePos: { x: number; y: number }) {
    const dx = mousePos.x - this.x;
    const dy = mousePos.y - this.y;
    const angle = Math.atan2(dy, dx);
    const distance = Math.sqrt(dx * dx + dy * dy) / 20;
    this.velocityX = Math.cos(angle) * -distance;
    this.velocityY = Math.sin(angle) * -distance;
  }
}
