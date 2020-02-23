import styled from 'styled-components'

export const StyledBall = styled.div`
  width: 30px;
  height: 130px;
  /* background-color: blue; */
  position: absolute;
  left: 160px;
  top: 50px;
  transform: rotate(0deg);
  transform-origin: 50% 100%;
  animation: spin 5s ease-out forwards ;
  animation-play-state: ${({ winner }) => 
  winner.animationPlayState};

  &::after {
    content: '';
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 0;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(${({ winner }) => winner.rotation}deg); }
  }
`