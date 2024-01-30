import Typography from "components/atoms/Typography";
import { Col, Container, FlexGrid } from "jss";
import caseStudies from "constants/case-studies.json";
import styled from "styled-components";
import ProjectCard from "components/composed/ProjectCard";

const Wrapper = styled.div`
  background: url("/assets/images/transparent-bg.png") no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
  padding: 70px 0 140px 0;
  overflow-y: scroll;

  &::before {
    content: "";
    position: absolute;
    bottom: 3vw;
    left: -25vw;
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(89, 55, 148, 0.4) 0%, rgba(152, 212, 197, 0.4) 100%);
    filter: blur(600px);
  }
`;

export default function CaseStudies() {
  return (
    <Wrapper>
      <Container>
        <FlexGrid>
          <Col xs={12} md={6}>
            <Typography marginBottom="10px" color="mint">
              What have I done?
            </Typography>
            <Typography as="h2" fontSize="xxl" fontFamily="Aldo" lineHeight="xl" marginBottom="100px">
              Case Studies
            </Typography>
            {caseStudies[0].map((caseStudy) => (
              <ProjectCard
                key={caseStudy._id}
                title={caseStudy.title}
                description={caseStudy.description}
                imgProps={{ src: caseStudy.img }}
                link={caseStudy.link}
                color={caseStudy?.color as string}
              />
            ))}
          </Col>
          <Col xs={12} md={6}>
            {caseStudies[1].map((caseStudy) => (
              <ProjectCard
                key={caseStudy._id}
                title={caseStudy.title}
                description={caseStudy.description}
                imgProps={{ src: caseStudy.img }}
                color={caseStudy?.color as string}
              />
            ))}
          </Col>
        </FlexGrid>
      </Container>
    </Wrapper>
  );
}
