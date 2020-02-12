import styled from 'styled-components';

export const StyledNumberSlot = styled.div`
  height: 175px;
  width: 30px;
  position: absolute;
  display: inline-block;
  margin-left: 160px;
  transform: rotate(${({ rotation }) => rotation}deg);
  transform-origin: 50% 100%;
  color: white;
  text-align: center;

  &::after {
    content: ${({ number }) => `'${number}'`};
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    border-top: 175px solid ${({ color }) => color};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`;
