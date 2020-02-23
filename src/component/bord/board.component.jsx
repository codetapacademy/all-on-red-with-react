import React, { useState } from "react";
import { StyledBoard, StyledBoardWrapper } from "./board.style";
import Slot from "../slot";
import Ball from "../ball";
import Selected from "../selected/selected.component";

const Board = () => {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [winner, setWinnner] = useState({ animationPlayState: "paused" });

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

  const showMessage = (win, multiplier) => {
    if (win) {
      setMessage(`You won £${multiplier * 10}`);
    } else {
      setMessage(`You lost £${multiplier * 10}`);
    }
  };

  const spinIt = () => {
    const randomNumber = Math.round(Math.random() * 38);
    setWinnner({
      ...slotList[randomNumber],
      animationPlayState: "running",
      rotation:
        slotList[randomNumber].rotation + 360 * (~~(Math.random() * 7) + 3)
    });

    console.log(slotList[randomNumber], selected);
    const { key, multiplier } = selected;
    if (["even", "odd"].includes(key)) {
      const o = {
        0: "even",
        1: "odd"
      };
      showMessage(o[+slotList[randomNumber].number % 2] === key, multiplier);
    } else if (["black", "red"].includes(key)) {
      showMessage(slotList[randomNumber].color === key, multiplier);
    } else {
      const keyPieces = key.split(",");
      showMessage(
        keyPieces.includes(slotList[randomNumber].number),
        multiplier
      );
    }
  };

  const handleSelect = (key, multiplier) => {
    setSelected({ key, multiplier });
  };

  return (
    <StyledBoardWrapper>
      <StyledBoard side={350}>
        {slotList.map(slot => (
          <Slot key={slot.number} {...slot} />
        ))}
      </StyledBoard>
      <Ball winner={winner} />
      <div>{message}</div>
      {selected && <button onClick={spinIt}>Spin it</button>}
      <Selected slotList={slotList} handleSelect={handleSelect} />
    </StyledBoardWrapper>
  );
};

export default Board;
