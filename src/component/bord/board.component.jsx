import React from "react";
import { StyledBoard, StyledBoardWrapper } from "./board.style";
import Slot from "../slot";
import Ball from "../ball";

const Board = () => {
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

  return (
    <StyledBoardWrapper>
      <StyledBoard side={350}>
        {slotList.map(slot => (
          <Slot {...slot} />
        ))}
      </StyledBoard>
      ,
      <Ball />
    </StyledBoardWrapper>
  );
};

export default Board;
