import styled from 'styled-components'

export const StyledMagicSlot = styled.div `
  height: 175px;
  position: relative;
  display: inline-block;
  margin-left: 140px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid red;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  &::after {
    content: '1';
    position:relative;
  }
`