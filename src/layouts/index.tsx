import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

interface Props {
  children: ReactElement[] | ReactElement;
}

const Main = styled.main`
  margin-top: 110px;
`;

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <NavBar />

      <Main>{children}</Main>
    </>
  );
}
