import styled from 'styled-components'

export const StyledSlot = styled.div`
  height: 175px;
  position: relative;
  display: inline-block;
  margin-left: 165px;
  transform: rotate(120deg);
  transform-origin: 50% 100%;

  &::after {
    content: ${({ number }) => `"${number}"`};
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid red;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
`