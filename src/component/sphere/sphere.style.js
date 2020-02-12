import styled from 'styled-components';

export const StyledSphere = styled.div`
  width: 30px;
  height: 130px;
  /* background-color: blue; */
  position: absolute;
  left: 160px;
  top: 50px;
  transform: rotate(20deg);
  transform-origin: 50% 100%;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: grey;
    border-radius: 50%;
  }
`;
