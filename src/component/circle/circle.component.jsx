import React from 'react';
import { StyledCircle } from './circle.style';
import NumberSlot from '../number-slot';

const Circle = () => {
  return (
    <StyledCircle side={350}>
      <NumberSlot />
    </StyledCircle>
  );
};

export default Circle;
