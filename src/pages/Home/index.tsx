import { IParallax, Parallax } from "@react-spring/parallax";
import React, { useRef } from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Hero from "./Hero";
import RecentBlog from "./RecentBlog";

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
      <Parallax pages={4} ref={parralax}>
        <Hero />
        <AboutMe />
        <CaseStudies />
        <RecentBlog />
      </Parallax>
    </>
  );
}
