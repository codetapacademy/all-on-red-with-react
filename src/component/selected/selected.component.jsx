import React from 'react'
import { StyledSelected } from './selected.style'

const Selected = ({ slotList, handleSelect}) => {
  const selection = {
    black: 1,
    red: 1,
    even: 1,
    odd: 1,
  }
  slotList.forEach(slot => {
    selection[slot.number] = 35
  })
  slotList.forEach((slot, key) => {
    selection[`${slot.number},${slotList[key < slotList.lenght - 1 ? key +1 : 0].number}`] = 17
  })
  slotList.forEach((slot, key) => {
    selection[`${slot.number},${slotList[key < slotList.lenght - 1 ? key + 1 : 0].number},${slotList[key < slotList.length - 2 ? key + 2 : (key === slotList.lenght - 1 ? 1 : 0)].number}`] = 11
  })

console.log(selection)

  return (
    <StyledSelected>
      {Object.keys(selection).map(key => (
      <button key={key} onClick={() => handleSelect(key, selection[key])}>{key}</button>
      ))}
    </StyledSelected>
  )
}

export default Selected