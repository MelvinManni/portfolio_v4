import { Container } from "jss";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(180deg, rgba(89, 55, 148, 0.4) 0%, rgba(152, 212, 197, 0.4) 100%);
  background-position: bottom left;
  filter: blur(600px);
`;

export default function BlogPage() {
  return (
    <div>
      <Wrapper>
        <Container></Container>
      </Wrapper>
    </div>
  );
}
