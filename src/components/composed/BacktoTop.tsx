import React from "react";
import styled from "styled-components";
import { ArrowDownIcon } from "svg";

const Wrapper = styled.button`
  position: fixed;
  bottom: 60px;
  right: 10px;
  background: ${({ theme }) => theme.colors.mint};
  border: 0;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  z-index: 1000;
  cursor: pointer;
`;

const Icon = styled(ArrowDownIcon)`
  transform: rotate(180deg);
  color: ${({ theme }) => theme.colors.white};
`;

export default function BacktoTop() {
  const [show, setShow] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useLayoutEffect(() => {
    window.scrollY > 200 ? setShow(true) : setShow(false);

    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShow(true) : setShow(false);
    });
  });

  return show ? (
    <Wrapper
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <Icon />
    </Wrapper>
  ) : (
    <></>
  );
}
