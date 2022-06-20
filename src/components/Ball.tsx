import React, { SVGProps, useState } from "react";

export enum BallColour {
  Red = "red",
  Yellow = "yellow",
  White = "white",
  Black = "black",
}

type Props = {
  x: number;
  y: number;
  colour: BallColour;
  size: number;
  onClick?: () => void;
};

const Ball = ({ x = 0, y = 0, colour, size, onClick }: Props) => {
  return (
    <g transform={`translate(${x}, ${y})`} onMouseDown={onClick}>
      <circle cx={size} cy={size} r={size} fill={colour} />
    </g>
  );
};

export default Ball;
