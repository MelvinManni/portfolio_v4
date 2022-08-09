import {
  DISPLAY,
  FONT_STYLE,
  FONT_WEIGHT,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
  TEXT_ALIGN,
  TEXT_DECORATION_LINE,
  TEXT_TRANSFORM,
  WORD_BREAK,
} from "css-properties-props";
import { ReactElement } from "react";
import styled from "styled-components";
import { FontFamily } from "types";
import { ColorsProps, FontSizesProps, LineHeightProps } from "types/theme";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  fontSize?: FontSizesProps;
  fontFamily?: FontFamily;
  fontStyle?: FONT_STYLE;
  lineHeight?: LineHeightProps;
  customColor?: string;
  color?: ColorsProps;
  align?: TEXT_ALIGN;
  decoration?: TEXT_DECORATION_LINE;
  marginTop?: MARGIN_TOP;
  marginBottom?: MARGIN_BOTTOM;
  marginRight?: MARGIN_RIGHT;
  marginLeft?: MARGIN_LEFT;
  transform?: TEXT_TRANSFORM;
  weight?: FONT_WEIGHT;
  display?: DISPLAY;
  wordBreak?: WORD_BREAK;
  pointer?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | string | any;
}

const TextStyle = styled.p<TextProps>`
  display: ${({ display }) => display};
  font-family: ${({ fontFamily }) => fontFamily || "DM Sans"};
  font-size: ${({ fontSize, theme }) => (fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.md)};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  line-height: ${({ lineHeight, theme }) => (lineHeight ? theme.lineHeights[lineHeight] : theme.lineHeights.xs)};
  color: ${({ color, customColor, theme }) => (customColor ? customColor : color ? theme.colors[color] : theme.colors.white)};
  text-align: ${({ align }) => align};
  text-decoration: ${({ decoration }) => decoration};
  text-transform: ${({ transform }) => transform};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  font-weight: ${({ weight }) => weight || 400};
  word-break: ${({ wordBreak }) => wordBreak};
  cursor: ${({ pointer }) => pointer && "pointer"};

  ${({ theme }) => theme.mediaQueries.max.md} {
    font-size: ${({ fontSize, theme }) => (fontSize ? theme.fontSizes.screenMd[fontSize] : theme.fontSizes.screenMd.md)};
    line-height: ${({ lineHeight, theme }) => (lineHeight ? theme.lineHeights.screenMd[lineHeight] : theme.lineHeights.screenMd.xs)};
  }
`;

function Typography(props: TextProps): ReactElement {
  return (
    <TextStyle as={props.as} {...props}>
      {props.children}
    </TextStyle>
  );
}

export default Typography;
