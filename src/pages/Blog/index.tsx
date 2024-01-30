import Typography, { TextStyle } from "components/atoms/Typography";
import blogPosts, { getLinkPreview } from "constants/blog-posts";
import { Col, Container, Flex, FlexGrid } from "jss";
import ConnectWithMe from "pages/Home/Contact";
import { StyledLinkPreview } from "pages/Home/RecentBlog";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  padding: 220px 0 140px 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -15vw;
    left: -15vw;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(80, 200, 239, 0.2) 0%, rgba(152, 212, 197, 0.2) 100%);
    filter: blur(150px);
  }
`;

const BlogWrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.white};
  padding-top: 200px;
  padding-bottom: 120px;
`;

const HeroText = styled(TextStyle)`
  ${({ theme }) => theme.mediaQueries.min.lg} {
    font-size: 150px;
  }
`;

export default function BlogPage() {
  return (
    <div>
      <Wrapper>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <HeroText as="h2" fontSize="hero" fontFamily="Aldo" lineHeight="xl" marginBottom="40px">
            Blog Post
          </HeroText>
          <Typography as="h2" fontSize="lg" fontFamily="Aldo" lineHeight="xl">
            Articles, technical writting and helpful contents
          </Typography>
        </Flex>
      </Wrapper>
      <BlogWrapper>
        <FlexGrid alignItems="stretch">
          {blogPosts.map((post) => (
            <Col xs={12} lg={4}>
              <StyledLinkPreview key={post} url={post} fetcher={getLinkPreview} />
            </Col>
          ))}
        </FlexGrid>
      </BlogWrapper>
      <ConnectWithMe />
    </div>
  );
}
