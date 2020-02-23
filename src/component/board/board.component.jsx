import React, { useState } from 'react'
import { StyledBoard, StyledBoardWrapper } from './board.style'
import Slot from '../slot'
import Ball from '../ball'
import Selected from '../selected'


const Board = () => {
  const [selected, setSelected] = useState(null)
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

  const handleSelect = (key, multiplier) => {
    setSelected(key, multiplier)
  }

  return (
    <StyledBoardWrapper>
      <StyledBoard side={350}>
        {slotList.map(slot => <Slot key={slot.number} {...slot} />)}
      </StyledBoard>
      <Ball winner={winner}/>
      {selected && <button onClick={bet}>spin it</button>}
      <Selected slotList={slotList} handleSelect={handleSelect} />
    </StyledBoardWrapper>
  )
}

export default Board