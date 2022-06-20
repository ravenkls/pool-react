import { BallColour } from "./components/Ball";
import { Ball } from "./entities/Ball";
import { CueBall } from "./entities/CueBall";

export type GameState = {
  aiming: boolean;
  cueBall: CueBall;
  objectBalls: Ball[];
};

export const initialState = {
  aiming: false,
  cueBall: new CueBall(100, 50, 8),
  objectBalls: [
    new Ball(0, 0, 10, 0, 0, BallColour.Red),
    new Ball(300, 100, 10, 0, 0, BallColour.Yellow),
  ],
};

export type GameEvent =
  | {
      type: "aiming";
    }
  | {
      type: "shoot";
      mousePos: { x: number; y: number };
    };

export const gameLoop = (
  state: GameState,
  frame: number,
  events: GameEvent[]
): GameState => {
  events.forEach((event) => {
    switch (event.type) {
      case "aiming":
        state.aiming = true;
        break;
      case "shoot":
        state.aiming = false;
        state.cueBall.shoot(event.mousePos);
        break;
    }
  });

  state.cueBall.update(frame);
  state.objectBalls.forEach((ball) => ball.update(frame));

  return state;
};
