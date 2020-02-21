import styled from 'styled-components'

export const StyledBoardWrapper = styled.div`
  position: relative;

`
export const StyledBoard = styled.div`
  background-color: #94632c;
  border-radius: 50%;
  width: ${({ side }) => `${side}px`};
  height: ${({ side }) => `${side}px`};
  position: relative;

  &::after{
    content: '';
    width: 250px;
    height: 250px;
    top: 50px;
    left: 50px;
    background-color: #faa918;
    position: absolute;
    border-radius: 50%;

  }
`
