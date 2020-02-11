import React from 'react';
import { StyledCircle } from './circle.style';
import NumberSlot from '../number-slot';

const Circle = () => {
  const length = 18;
  const numberSlotList = [
    {
      number: '0',
      rotation: 0,
      color: 'green'
    },
    ...Array.from({ length }, (_, key) => key + 1).map(n => ({
      number: n + '',
      rotation: ~~((360 / 38) * n * 100) / 100,
      color: n % 2 ? 'black' : 'red'
    })),
    {
      number: '00',
      rotation: 180,
      color: 'green'
    },
    ...Array.from({ length }, (_, key) => key + 19).map(n => ({
      number: n + '',
      rotation: ~~((360 / 38) * (n + 1) * 100) / 100,
      color: n % 2 ? 'red' : 'black'
    }))
  ];

  console.log(numberSlotList);

  return (
    <StyledCircle side={350}>
      <NumberSlot />
    </StyledCircle>
  );
};

export default Circle;
