import { Spacing } from "jss";
import styled from "styled-components";

const Card = styled(Spacing)`
  border-radius: ${({ theme }) => theme.radius.card};
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export default Card;
