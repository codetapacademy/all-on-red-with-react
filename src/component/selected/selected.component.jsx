import React from "react";
import { StyledSelected } from "./selected.style";
const Selected = ({ slotList }) => {
  const selection = {
    black: 1,
    red: 1,
    even: 1,
    odd: 1
  };

  slotList.forEach(slot => {
    selection[slot.number] = 35;
  });

  slotList.forEach((slot, key) => {
    selection[
      `${slot.number},
       ${slotList[key < slotList.length - 1 ? key + 1 : 0].number}`
    ] = 17;
  });

  slotList.forEach((slot, key) => {
    selection[
      `
        ${slot.number}, 
        ${slotList[key < slotList.length - 1 ? key + 1 : 0].number},
        ${
          slotList[
            key < slotList.length - 2
              ? key + 2
              : key === slotList.length - 1
              ? 1
              : 0
          ].number
        }`
    ] = 11;
  });

  console.log(selection);
  return <StyledSelected>Select</StyledSelected>;
};

export default Selected;
