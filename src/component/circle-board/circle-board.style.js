import styled from 'styled-components'

export const StyledCircleBoard = styled.div `
  background-color: #442218;
  width: ${({ side }) => `${side}px`};
  height: ${({ side }) => `${side}px`};
  border-radius: 50%;
`
