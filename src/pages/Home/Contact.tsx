import Typography from "components/atoms/Typography";
import { Col, Container, Flex, FlexGrid } from "jss";
import styled from "styled-components";



const Wrapper = styled.div`
  position: relative;
  background: url("/assets/images/contact.png") no-repeat bottom;
  background-color: ${({ theme }) => theme.colors.white};
  background-size: 100%;
  height: 100%;
  position: relative;
  padding: 170px 0 180px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background: url("/assets/images/transparent-bg.png") no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.3;
  }
`;

const Input = styled.input`
  border-radius: 8px;
  background: #ebf3fc;
  height: 70px;
  padding: 10px 20px;
  border: none;
  width: 100%;
  outline: none;
  font-size: 16px;
  color: #000000;
  margin-bottom: 14px;
  &::placeholder {
    color: #a5a5a5;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
`;

const TextArea = styled.textarea`
  border-radius: 8px;
  background: #ebf3fc;
  padding: 20px 28px;
  border: none;
  width: 100%;
  outline: none;
  font-size: 16px;
  color: #000000;
  margin-bottom: 14px;
  &::placeholder {
    color: #a5a5a5;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
`;

export default function ConnectWithMe() {
  return (
    <Wrapper>
      <Container>
        <Flex marginBottom="70px" justifyContent="space-between" alignItems="end">
          <div>
            <Typography marginBottom="10px" color="mint">
              Send a Message
            </Typography>
            <Typography color="text" as="h2" fontSize="xxl" fontFamily="Aldo" lineHeight="xl">
              Connect With Me
            </Typography>
          </div>
        </Flex>

        <FlexGrid alignItems="stretch">
          <Col xs={12} lg={6}>
            <form action="">
              <Input placeholder="Full Name" name="Message" type="text" required/>
              <Input placeholder="Email Address"  />
              <TextArea placeholder="Message" />
            </form>
          </Col>
          <Col xs={12} lg={6}></Col>
        </FlexGrid>
      </Container>
    </Wrapper>
  );
}
