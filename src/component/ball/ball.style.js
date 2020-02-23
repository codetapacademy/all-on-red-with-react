import styled from "styled-components";

export const StyleBall = styled.div`
  width: 30px;
  height: 130px;
  /* background-color: blue; */
  position: absolute;
  left: 160px;
  top: 50px;
  transform: rotate(20deg);
  transform-origin: 50% 100%;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: grey;
    border-radius: 50%;
  }
`;
