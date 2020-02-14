import React, { useState } from 'react';
import { StyledCircle, StyledCircleWrapper } from './circle.style';
import NumberSlot from '../number-slot';
import Sphere from '../sphere';
import Elected from '../elected/elected.component';

const Circle = () => {
  const [elected, setElected] = useState(null);
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

  const showMessage = (win, multiplier) => {
    if (win) {
      console.log(`You won £${multiplier * 10}`);
    } else {
      console.log(`You lost £${multiplier * 10}`);
    }
  };

  const spinIt = () => {
    const randomNumber = Math.round(Math.random() * 37);
    setWin({
      ...numberSlotList[randomNumber],
      animationPlayState: 'running',
      rotation:
        numberSlotList[randomNumber].rotation +
        360 * (~~(Math.random() * 7) + 3)
    });

    console.log(numberSlotList[randomNumber], elected);

    const { key, multiplier } = elected;

    if (['even', 'odd'].includes(key)) {
      const obj = {
        0: 'even',
        1: 'odd'
      };
      showMessage(
        obj[+numberSlotList[randomNumber].number % 2] === key,
        multiplier
      );
    } else if (['black', 'red'].includes(key)) {
      showMessage(numberSlotList[randomNumber].color === key, multiplier);
    } else {
      showMessage(numberSlotList[randomNumber].color === key, multiplier);
    }
  };

  const handleElect = (key, multiplier) => {
    setElected({ key, multiplier });
  };

  return (
    <StyledCircleWrapper>
      <StyledCircle side={350}>
        {numberSlotList.map(slot => (
          <NumberSlot key={slot.number} {...slot} />
        ))}
      </StyledCircle>
      <Sphere win={win} />
      {elected && <button onClick={spinIt}>Spin It</button>}
      <Elected numberSlotList={numberSlotList} handleElect={handleElect} />
    </StyledCircleWrapper>
  );
};

export default Circle;
