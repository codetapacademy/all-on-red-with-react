import React from 'react';
import { StyledNumberSlot } from './number-slot.style';

const NumberSlot = ({ number, rotation, color }) => {
  return <StyledNumberSlot number={number} rotation={rotation} color={color} />;
};

export default NumberSlot;
