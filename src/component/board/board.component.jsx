import React, { useState } from 'react'
import { StyledBoard, StyledBoardWrapper } from './board.style'
import Slot from '../slot'
import Ball from '../ball'
import Selected from '../selected'


const Board = () => {
  const [winner, setWinner] = useState({ animationPlayState: 'paused' })
  const length = 18

  const slotList = [
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

  const bet = () => {
    const randomNumber = Math.round(Math.random() * 38);
    setWinner({
      ...slotList[randomNumber],
      animationPlayState: 'running',
      rotation: slotList[randomNumber].rotation + (360 * (~~(Math.random() * 7) + 3))
    })
  }

  return (
    <StyledBoardWrapper>
      <StyledBoard side={350}>
        {slotList.map(slot => <Slot key={slot.number} {...slot} />)}
      </StyledBoard>
      <Ball winner={winner}/>
      <button onClick={bet}>BET</button>
      <Selected slotList={slotList} />
    </StyledBoardWrapper>
  )
}

export default Board