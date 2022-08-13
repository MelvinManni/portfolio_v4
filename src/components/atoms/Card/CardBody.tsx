import { Spacing } from "jss";
import styled from "styled-components";

const CardBody = styled(Spacing)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  padding: 10px 0px 15px;
  border-radius: ${({ theme }) => theme.radius.card};
`;

export default CardBody;
