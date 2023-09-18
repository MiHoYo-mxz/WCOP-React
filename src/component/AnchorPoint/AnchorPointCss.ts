import { keyframes, styled } from "styled-components";

const move = keyframes`
  0% {
    transform: translate(-50%,0);
  }
  50% {
    transform: translate(-50%,-50%);
  }
  100% {
    transform: translate(-50%,0);
  }
`;

export const AnchorPointWrapper = styled.div`
  cursor: pointer;
  animation: ${move} 3s infinite;
`;
