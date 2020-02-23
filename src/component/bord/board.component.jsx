import React, { useState } from "react";
import { StyledBoard, StyledBoardWrapper } from "./board.style";
import Slot from "../slot";
import Ball from "../ball";

const Board = () => {
  const [winner, setWinnner] = useState({});

  const length = 18;
  const slotList = [
    {
      number: "0",
      rotation: 0,
      color: "green"
    },
    ...Array.from({ length }, (_, key) => key + 1).map(n => ({
      number: n + "",
      rotation: ~~((360 / 38) * n * 100) / 100,
      color: n % 2 ? "black" : "red"
    })),
    {
      number: "00",
      rotation: 180,
      color: "green"
    },
    ...Array.from({ length }, (_, key) => key + 19).map(n => ({
      number: n + "",
      rotation: ~~((360 / 38) * (n + 1) * 100) / 100,
      color: n % 2 ? "red" : "black"
    }))
  ];

  const bet = () => {
    const randomNumber = Math.round(Math.random() * 38);
    setWinnner(slotList[randomNumber]);
  };

  return (
    <StyledBoardWrapper>
      <StyledBoard side={350}>
        {slotList.map(slot => (
          <Slot key={slot.number} {...slot} />
        ))}
      </StyledBoard>
      <Ball rotation={winner.rotation} />
      <button onClick={bet}>BET</button>
    </StyledBoardWrapper>
  );
};

export default Board;
