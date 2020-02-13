import React, { useState } from 'react';
import { StyledCircle, StyledCircleWrapper } from './circle.style';
import NumberSlot from '../number-slot';
import Sphere from '../sphere';
import Elected from '../elected/elected.component';

const Circle = () => {
  const [win, setWin] = useState({ animationPlayState: 'paused' });
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

  // console.log(numberSlotList);

  const bet = () => {
    const randomNumber = Math.round(Math.random() * 38);
    setWin({
      ...numberSlotList[randomNumber],
      animationPlayState: 'running',
      rotation:
        numberSlotList[randomNumber].rotation +
        360 * (~~(Math.random() * 7) + 3)
    });
  };

  return (
    <StyledCircleWrapper>
      <StyledCircle side={350}>
        {numberSlotList.map(slot => (
          <NumberSlot key={slot.number} {...slot} />
        ))}
      </StyledCircle>
      <Sphere win={win} />
      <button onClick={bet}>BET</button>
      <Elected numberSlotList={numberSlotList} />
    </StyledCircleWrapper>
  );
};

export default Circle;
