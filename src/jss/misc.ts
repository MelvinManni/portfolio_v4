import styled from "styled-components";
import { ColorsProps } from "types/theme";

export const Path = styled.path<{fillColor: ColorsProps}>`
  fill: ${(props) => props.theme.colors[props.fillColor]};
`;
