import { IParallax, Parallax } from "@react-spring/parallax";
import React, { useRef } from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "./AboutMe";
import Hero from "./Hero";

const GlobalStyle = createGlobalStyle`
  body, html {
    overflow: hidden;
  }
`;

export default function HomePage() {
  const parralax = useRef<IParallax>() as React.MutableRefObject<IParallax>;
  return (
    <>
      <GlobalStyle />
      <Parallax pages={3} ref={parralax}>
        <Hero />
        <AboutMe />
      </Parallax>
    </>
  );
}
