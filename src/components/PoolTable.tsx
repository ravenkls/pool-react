import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context/GameContext";
import Ball, { BallColour } from "./Ball";

const TABLE_DIMENSIONS = 91 / 183;

const PlayingSurface = styled.svg<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size * TABLE_DIMENSIONS}px;
  border: 1px solid black;
  background: green;
`;

type Props = {};

const PoolTable = forwardRef<SVGSVGElement>((props: Props, ref) => {
  const { state, triggerEvent } = useContext(GameContext);

  return (
    <PlayingSurface size={1000} ref={ref}>
      <Ball
        x={state.cueBall.x}
        y={state.cueBall.y}
        colour={state.cueBall.colour}
        size={state.cueBall.radius}
        onClick={() => triggerEvent({ type: "aiming" })}
      />
      {state.objectBalls.map((ball, i) => (
        <Ball
          x={ball.x}
          y={ball.y}
          colour={ball.colour}
          size={ball.radius}
          key={i}
        />
      ))}
    </PlayingSurface>
  );
});

export default PoolTable;
