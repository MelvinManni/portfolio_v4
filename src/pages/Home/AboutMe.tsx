import { ParallaxLayer } from "@react-spring/parallax";
import Typography from "components/atoms/Typography";
import { Col, Container, Flex, FlexGrid } from "jss";
import React from "react";
import styled from "styled-components";
import { AboutImage } from "svg";

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
              <AboutImage width="100%" height="unset" />
            </Col>
            <Col xs={12} lg={7}>
              <Flex justifyContent="flex-end">
                <Col xs={12} lg={9}>
                  <Flex marginBottom="40px" justifyContent="flex-end">
                    <img src="/assets/images/person-laptop.png" alt="person-laptop" />
                  </Flex>

                  <div>
                    <Typography color="mint">Who am I?</Typography>
                    <Typography as="h2" fontSize="xxl" fontFamily="Aldo" lineHeight="xl" marginBottom="40px">
                      A Bit About Me
                    </Typography>
                    <Typography fontSize="md" lineHeight="lg">
                      I am Nnamani Melvin Kosisochukwu, a software developer, technical writer, blockchain enthusiast, student and gamer😅. I started my
                      programming journey in 2018 but before then i have dabbled a little and ended up pulling back. Programming is exactly what you think it
                      is... writing beautiful codes that work and trying to get rid of as much bugs as possible while being powered by coffee.
                    </Typography>
                  </div>
                </Col>
              </Flex>
            </Col>
          </FlexGrid>
        </Container>
      </Wrapper>
    </ParallaxLayer>
  );
}
