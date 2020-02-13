import React from 'react';
import { StyledElected } from './elected.style';

const Elected = ({ numberSlotList, handleElect }) => {
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

  return (
    <StyledElected>
      {Object.keys(election).map(key => (
        <button key={key} onClick={() => handleElect(key, election[key])}>
          {key}
        </button>
      ))}
    </StyledElected>
  );
};

export default Elected;
