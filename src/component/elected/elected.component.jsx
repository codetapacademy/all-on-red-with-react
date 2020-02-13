import React from 'react';
import { StyledElected } from './elected.style';

const Elected = ({ numberSlotList }) => {
  const election = {
    black: 1,
    red: 1,
    even: 1,
    odd: 1
  };

  numberSlotList.forEach(slot => {
    election[slot.number] = 35;
  });

  numberSlotList.forEach((slot, key) => {
    election[
      `${slot.number}, ${
        numberSlotList[key < numberSlotList.length - 1 ? key + 1 : 0].number
      }`
    ] = 17;
  });

  numberSlotList.forEach((slot, key) => {
    election[
      `${slot.number}, ${
        numberSlotList[key < numberSlotList.length - 1 ? key + 1 : 0].number
      }, ${
        numberSlotList[
          key < numberSlotList.length - 2
            ? key + 2
            : key === numberSlotList.length - 1
            ? 1
            : 0
        ].number
      }`
    ] = 11;
  });

  console.log(election);

  return <StyledElected>ELECTED</StyledElected>;
};

export default Elected;
