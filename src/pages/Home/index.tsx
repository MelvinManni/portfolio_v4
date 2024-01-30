import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Hero from "./Hero";
import RecentBlog from "./RecentBlog";
import ConnectWithMe from "./Contact";

export default function HomePage() {
  return (
    <>
      {/* <Parallax pages={4} ref={parralax}> */}
      <Hero />
      <AboutMe />
      <CaseStudies />
      <RecentBlog />
      <ConnectWithMe />
      {/* </Parallax> */}
    </>
  );
}
