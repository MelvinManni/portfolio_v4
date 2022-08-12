import { ParallaxLayer } from "@react-spring/parallax";
import { Col, Container, FlexGrid } from "jss";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 130px 0 100px 0;
  background: ${({ theme }) => theme.colors.black};
  &::before {
    content: "";
    position: absolute;
    top: -10vw;
    left: -15vw;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: linear-gradient(160.65deg, rgba(89, 55, 148, 0.2) 44.67%, rgba(152, 212, 197, 0.2) 92.93%);
    filter: blur(100px);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -5vw;
    right: -7.5vw;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(89, 55, 148, 0.4) 0%, rgba(152, 212, 197, 0.4) 100%);
    filter: blur(100px);
  }
`;

export default function AboutMe() {
  return (
    <ParallaxLayer offset={1}>
      <Wrapper>
        <Container>
          <FlexGrid>
            <Col xs={12} lg={5} hideLg>
              <img src="/asset/images/about.svg" alt="" width="100%" />
            </Col>
            <Col xs={12} lg={7}></Col>
          </FlexGrid>
        </Container>
      </Wrapper>
    </ParallaxLayer>
  );
}
