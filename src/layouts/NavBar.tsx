import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";
import { Container, Flex, Spacing } from "jss";
import React, { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "svg";

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.navbar};
  background-color: rgba(30, 30, 30, 0.813);
`;

const Nav = styled(Container)`
  background: url("/assets/images/transparent-bg.png") no-repeat center center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 2px solid #121212;
  height: 110px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default function NavBar(): ReactElement {
  return (
    <Header>
      <Nav as="nav">
        <Link to="/">
          <Flex alignItems="end">
            <Logo />
            <Typography
              as="a"
              fontFamily="DM Sans"
              color="white"
              fontStyle="italic"
              marginLeft="5px"
              style={{ fontSize: 9, lineHeight: 1 }}
            >
              Software <br /> Developer
            </Typography>
          </Flex>
        </Link>
        <NavList>
          <Link to="/blog">
            <Typography as="li">Blog</Typography>
          </Link>
          <Spacing as="li" marginLeft="65px" marginSmLeft="20px">
            <Button as={"a"} href="mailto:melvinnnamani@gmail.com?subject=I%20Want%20to%Employ%20Your%20Services">
              Hire Me!
            </Button>
          </Spacing>
        </NavList>
      </Nav>
    </Header>
  );
}
