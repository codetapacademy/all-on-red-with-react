import styled from 'styled-components'

export const StyledSlot = styled.div`
  height: 175px;
  position: absolute;
  display: inline-block;
  margin-left: 168px;
  transform: rotate(${({ rotation }) => rotation}deg);
  transform-origin: 50% 100%;
  color: white;
  /* text-align: center; */

  &::after {
    content: ${({ number }) => `'${number}'`};
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid ${({ color }) => color};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
`