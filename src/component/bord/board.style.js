import styled from "styled-components";

export const StyledBoard = styled.div`
  background-color: #94632c;
  border-radius: 50%;
  width: ${({ side }) => `${side}px`};
  height: ${({ side }) => `${side}px`};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    top: 50px;
    left: 50px;
    background-color: #faa918;
    border-radius: 50%;
  }
`;
