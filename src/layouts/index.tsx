import React, { ReactElement } from "react";
import NavBar from "./NavBar";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <NavBar />

      <div>{children}</div>
    </>
  );
}
