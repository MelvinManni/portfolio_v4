import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  return <>{children}</>;
}
