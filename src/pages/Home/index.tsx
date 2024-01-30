import { createGlobalStyle } from "styled-components";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Hero from "./Hero";
import RecentBlog from "./RecentBlog";

const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
    &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  }

`;

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      {/* <Parallax pages={4} ref={parralax}> */}
      <Hero />
      <AboutMe />
      <CaseStudies />
      <RecentBlog />
      {/* </Parallax> */}
    </>
  );
}
