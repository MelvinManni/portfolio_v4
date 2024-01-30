import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: ReactElement[] | ReactElement;
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

`;

const Main = styled.main`
  margin-top: 110px;
`;

export default function Layout({ children }: Props): ReactElement {
  return (
    <Wrapper>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
