import React from 'react'
import { StyledBall} from './ball.style'


const Ball = ({ winner }) => {
  return (
    <StyledBall winner={winner} />
  )
}

export default Ball