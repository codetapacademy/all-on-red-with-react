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
    })),
  ]

  const showMessage = (win, multiplier) => {
    if(win){
      console.log(`You won £${multiplier * 10}`)
    } else {
      console.log(`You lost £${multiplier * 10}`)
    }
    console.log(win, multiplier)
  }

  const spinIt = () => {
    const randomNumber = Math.round(Math.random() * 37);
    setWinner({
      ...slotList[randomNumber],
      animationPlayState: 'running',
      rotation: slotList[randomNumber].rotation + (360 * (~~(Math.random() * 7) + 3))
    })

    console.log(slotList[randomNumber],
    selected)
    const { key, multiplier } = selected;
    if(['even', 'odd'].includes(key)){
      const o = {
        0: 'even',
        1: 'odd'
      }
      showMessage(o[+slotList[randomNumber].number % 2] === key, multiplier)
    } else if(['black', 'red'].includes(key)) {
      showMessage(slotList[randomNumber].color === key, multiplier)
    } else {
      showMessage(slotList[randomNumber].color === key, multiplier)
    }
  }

  const handleSelect = (key, multiplier) => {
    setSelected({key, multiplier})
  }

  return (
    <StyledBoardWrapper>
      <StyledBoard side={350}>
        {slotList.map(slot => <Slot key={slot.number} {...slot} />)}
      </StyledBoard>
      <Ball winner={winner}/>
      {selected && <button onClick={spinIt}>spin it</button>}
      <Selected slotList={slotList} handleSelect={handleSelect} />
    </StyledBoardWrapper>
  )
}

export default Board