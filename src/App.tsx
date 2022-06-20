import React, { useContext, useRef } from "react";
import styled from "styled-components";
import PoolTable from "./components/PoolTable";
import { GameContext, GameProvider } from "./context/GameContext";

const GameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const { state, triggerEvent } = useContext(GameContext);
  const poolTableRef = useRef<SVGSVGElement>(null);

  return (
    <GameArea
      onMouseUp={(e: React.MouseEvent<HTMLElement>) => {
        if (state.aiming && poolTableRef.current) {
          const bounds = poolTableRef.current.getBoundingClientRect();
          const x = e.clientX - bounds.left;
          const y = e.clientY - bounds.top;
          triggerEvent({
            type: "shoot",
            mousePos: { x, y },
          });
        }
      }}
    >
      <PoolTable ref={poolTableRef} />
    </GameArea>
  );
}

export default App;
