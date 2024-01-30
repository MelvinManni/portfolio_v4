import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";
import { Col, Container, Flex, FlexGrid, Spacing } from "jss";
import styled from "styled-components";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MelvinLogo, TwitterIcon } from "svg";

const Wrapper = styled.div`
  background: url("/assets/images/transparent-bg.png") no-repeat;
  background-size: cover;
  position: relative;
  padding: 180px 0 70px 0;
  min-height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    bottom: -10vw;
    left: -15vw;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: linear-gradient(160.65deg, rgba(89, 55, 148, 0.2) 44.67%, rgba(152, 212, 197, 0.2) 92.93%);
    filter: blur(100px);
  }

  ${({ theme }) => theme.mediaQueries.max.lg} {
    padding-top: 120px;
  }
`;

const StoryBtnWrapper = styled.div`
  padding: 2px;
  background: linear-gradient(85.05deg, #593794 -4.37%, #50c8ef 109.29%);
  width: max-content;
  height: max-content;
  border-radius: ${({ theme }) => theme.radius.default};
  margin-top: 37px;
`;

const MyStoryBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.text};
  background-image: linear-gradient(95.48deg, rgba(255, 255, 255, 0.4) 2.95%, rgba(255, 255, 255, 0.1) 95.37%);
  backdrop-filter: blur(4px);
`;

const BorderText = styled(Typography)`
  color: ${({ theme }) => theme.colors.mint};
  -webkit-text-fill-color: transparent;
  font-size: 200px;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.mint};
  width: max-content;
  position: relative;
  z-index: 3;
`;

const ImageWrapper = styled.div`
  position: absolute;
  height: 550px;
  width: 400px;
  padding: 0 30px 30px 0;
  top: -60px;
  .img {
    position: relative;
    width: 100%;
    height: 100%;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: url("/assets/images/hero.png") no-repeat center bottom;
      z-index: 2;
      background-size: cover;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -30px;
      right: -30px;
      background: ${({ theme }) => theme.colors.primary};
      z-index: 1;
    }
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <FlexGrid>
          <Col xs={12} lg={6}>
            <Col xs={12} md={8}>
              <Typography marginBottom="10px" as="h1" fontSize="xxl" lineHeight="xl" fontFamily="Aldo">
                Hello, I'm
              </Typography>
              <MelvinLogo />
              <Typography lineHeight="lg">
                Software developer, student, lover of anime/video games and lover of JavaScript.
              </Typography>

              <StoryBtnWrapper>
                <MyStoryBtn radius="default">
                  My Story <ArrowDownIcon style={{ marginLeft: 9 }} />
                </MyStoryBtn>
              </StoryBtnWrapper>
              <Spacing marginTop="60px">
                <Flex alignItems="center">
                  <TwitterIcon />
                  <Spacing marginXaxis="10px">
                    <LinkedInIcon />
                  </Spacing>
                  <GitHubIcon />
                </Flex>
              </Spacing>
            </Col>
          </Col>
          <Col hideLg xs={12} lg={6}>
            <Flex justifyContent="center" className="relative" margin="auto">
              <ImageWrapper>
                <div className="img"></div>
              </ImageWrapper>
            </Flex>
            <BorderText fontFamily="Aldo" fontSize="hero" lineHeight="xxl">
              Melvin
            </BorderText>
            <BorderText marginLeft="auto" marginBottom="90px" fontFamily="Aldo" fontSize="hero" lineHeight="xxl">
              Manni
            </BorderText>
          </Col>
        </FlexGrid>
      </Container>
    </Wrapper>
  );
}
