import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

@font-face {
  font-family: "DM Sans";
  src: url("/asset/fonts/DMSans-Bold.ttf") format("truetype");
  font-weight: bold;
  font-display: swap;
}
@font-face {
  font-family: "DM Sans";
  src: url("/asset/fonts/DMSans-BoldItalic.ttf") format("truetype");
  font-style: italic;
  font-weight: bold;
  font-display: swap;
}
@font-face {
  font-family: "DM Sans";
  src: url("/asset/fonts/DMSans-Medium.ttf") format("truetype");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "DM Sans";
  src: url("/asset/fonts/DMSans-MediumItalik.ttf") format("truetype");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "DM Sans";
  src: url("/asset/fonts/DMSans-Regular.ttf") format("truetype");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "DM Sans";
  src: url("/asset/fonts/DMSans-RegularItalic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Aldo";
  src: url("/asset/fonts/Aldo PC.ttf") format("truetype");
  font-weight: 600;
  font-display: swap;
}


*{
  margin: 0;
  padding: 0;
  transition: 0.25s ease all;
  outline: none;
  box-sizing: border-box;
  &:active, &:focus {
    outline: none;
  }
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.black};
}

#root{
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 100vh;
  width: 100%;
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
