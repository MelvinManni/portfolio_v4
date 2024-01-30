import GreenHeartIcon from "svg/icons/green-heart";
import Typography from "components/atoms/Typography";
import { Container, Flex } from "jss";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "svg";
import styled from "styled-components";

const SocialWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default function Footer() {
  return (
    <footer>
      <Container bg="text">
        <Flex justifyContent="space-between" alignItems="center" paddingYaxis="34px">
          <Flex alignItems="center">
            <Typography fontFamily="Aldo" fontSize="lg" marginRight="10px">
              Built With Love
            </Typography>
            <GreenHeartIcon />
          </Flex>
          <div>
            <Flex alignItems="center" gap="20px">
              <SocialWrapper href="https://twitter.com/Melvin_manni" target="_blank">
                <TwitterIcon fillPath="white" />
              </SocialWrapper>
              <SocialWrapper href="https://www.linkedin.com/in/melvin-kosisochukwu-9557a9184/" target="_blank">
                <LinkedInIcon fillPath="white" />
              </SocialWrapper>
              <SocialWrapper href="https://github.com/MelvinManni" target="_blank">
                <GitHubIcon fillPath="white" />
              </SocialWrapper>
            </Flex>
          </div>
        </Flex>
      </Container>
      <Container bg="primary">
        <Flex justifyContent="space-between" paddingBottom="100px" />
      </Container>
    </footer>
  );
}
