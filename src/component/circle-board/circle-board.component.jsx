import React from 'react'
import { StyledCircleBoard } from './circle-board.style'
import MagicSlot from '../magic-slot'

const CircleBoard = () => {
  return (
    <StyledCircleBoard side={300}>
      <MagicSlot />
    </StyledCircleBoard>
  )
}

export default CircleBoard