import { createContext, useCallback, useEffect, useState } from "react";
import * as d3 from "d3";
import { Ball } from "../entities/Ball";
import { BallColour } from "../components/Ball";
import { GameEvent, gameLoop, GameState, initialState } from "../gamelogic";

export const GameContext = createContext<{
  state: GameState;
  triggerEvent: (e: GameEvent) => void;
}>({ state: initialState, triggerEvent: () => null });

type Props = {
  children?: React.ReactNode;
};

export const GameProvider = ({ children }: Props) => {
  const [gameState, setGameState] = useState(initialState);
  const [frame, setFrame] = useState(0);
  const [events, setEvents] = useState<GameEvent[]>([]);

  const triggerEvent = (e: GameEvent) => {
    setEvents([...events, e]);
  };

  const gameTick = useCallback(() => {
    const newState = gameLoop({ ...gameState }, frame, events);
    setGameState(newState);
    setFrame((n) => n + 1);
    setEvents([]);
  }, [frame, gameState, events]);

  useEffect(() => {
    const t = d3.timer(gameTick);
    return () => t.stop();
  });

  return (
    <GameContext.Provider value={{ state: gameState, triggerEvent }}>
      {children}
    </GameContext.Provider>
  );
};
