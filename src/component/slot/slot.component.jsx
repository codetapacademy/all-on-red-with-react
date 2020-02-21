import React from 'react'
import { StyledSlot } from './slot.style'

const Slot = ({ number, rotation, color }) => {
  return (
    <StyledSlot
      number={number}
      rotation={rotation}
      color={color}
    />
  )
}

export default Slot