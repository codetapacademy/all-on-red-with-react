import React from 'react'
import { StyledBoard } from './board.style'
import Slot from '../slot'

const Board = () => {
  const length = 18

  const slotList = [
    {
      number: '0',
      rotation: 0,
      color: 'green'
    },
    ...Array.from({ length }, (_,key) => key + 1).map(n => ({
        number: n + '',
        rotation: ~~(360 / 38 * n * 100) / 100,
        color: n % 2 ? 'black' : 'red',
    })),
    {
      number: '00',
      rotation: 180,
      color: 'green'
    },
    ...Array.from({ length }, (_,key) => key + 19).map(n => ({
        number: n + '',
        rotation: ~~(360 / 38 * (n + 1) * 100) / 100,
        color: n % 2 ? 'red' : 'black',
    }))
  ]

  return (
    <StyledBoard size={350}>
      <Slot/>
    </StyledBoard>
  )
}

export default Board