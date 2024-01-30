import { LinkPreview } from "@dhaiwat10/react-link-preview";
import Typography from "components/atoms/Typography";
import blogPosts, { getLinkPreview } from "constants/blog-posts";
import { Col, Container, Flex, FlexGrid } from "jss";
import { Link } from "react-router-dom";
import styled from "styled-components";



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

const StyledLinkPreview = styled(LinkPreview)`
  &.Container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .Secondary.SiteDetails span:first-child {
    display: none;
  }

  .Description.Secondary {
    line-clamp: 2;
    -webkit-line-clamp: 3;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function RecentBlog() {
  return (
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

        <FlexGrid alignItems="stretch">
          {blogPosts.slice(0, 3).map((post) => (
            <Col xs={12} lg={4}>
              <StyledLinkPreview key={post} url={post} fetcher={getLinkPreview} />
            </Col>
          ))}
        </FlexGrid>
      </Container>
    </Wrapper>
  );
}
