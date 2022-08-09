import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-x: hidden;
}


.relative {
  position: relative;
}

.pointer{
    cursor: pointer;
}

button:active {
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.035);
  animation: 0.7s pulse 1 forwards;
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(0.95, 0.95, 0.95);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export default GlobalStyle;
