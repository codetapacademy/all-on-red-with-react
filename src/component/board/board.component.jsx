import React from 'react'
import { StyledBoard } from './board.style'
import Slot from '../slot'

const Board = () => {
  return (
    <StyledBoard side={350}>
      <Slot/>
    </StyledBoard>
  )
}

export default Board