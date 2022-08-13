import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { ParallaxLayer } from "@react-spring/parallax";
import Typography from "components/atoms/Typography";
import blogPosts from "constants/blog-posts";
import { Col, Container, Flex, FlexGrid } from "jss";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.div`
  background: url("/assets/images/recent-blog.png") no-repeat bottom;
  background-color: ${({ theme }) => theme.colors.white};
  background-size: 100%;
  height: 100%;
  position: relative;
  padding: 70px 0 140px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default function RecentBlog({}: Props) {
  return (
    <ParallaxLayer offset={3}>
      <Wrapper>
        <Container>
          <Flex marginBottom="70px" justifyContent="space-between" alignItems="end">
            <div>
              <Typography marginBottom="10px" color="mint">
                Blog posts
              </Typography>
              <Typography color="text" as="h2" fontSize="xxl" fontFamily="Aldo" lineHeight="xl">
                Recent Blog Post
              </Typography>
            </div>

            <Link to="/blog">
              <Typography color="mint">See More</Typography>
            </Link>
          </Flex>

          <LinkPreview url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} width="400px" />

          <FlexGrid>
            {blogPosts.map((post) => (
              <Col xs={12} lg={4}>
                <LinkPreview url={post} />
              </Col>
            ))}
          </FlexGrid>
        </Container>
      </Wrapper>
    </ParallaxLayer>
  );
}
