import styled from 'styled-components';

export const StyledCircle = styled.div`
  background-color: #94632c;
  border-radius: 50%;
  height: ${({ side }) => `${side}px`};
  width: ${({ side }) => `${side}px`};
`;
