import { DISPLAY, MARGIN_BOTTOM, MARGIN_LEFT, MARGIN_RIGHT, MARGIN_TOP } from "css-properties-props";
import { FontFamily } from "types";
import { ColorsProps, RadiiProps } from "types/theme";

import styled from "styled-components";

export type ButtonProps = {
  customColor?: string;
  color?: ColorsProps;
  customBg?: string;
  fontFamily?: FontFamily;
  bg?: ColorsProps;
  marginTop?: MARGIN_TOP;
  marginBottom?: MARGIN_BOTTOM;
  marginRight?: MARGIN_RIGHT;
  marginLeft?: MARGIN_LEFT;
  display?: DISPLAY;
  radius?: RadiiProps;
};

const Button = styled.button<ButtonProps>`
  display: ${({ display }) => display || "block"};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  color: ${({ color, customColor, theme }) => (customColor ? customColor : color ? theme.colors[color] : theme.colors.white)};
  background-color: ${({ bg, customBg, theme }) => (customBg ? customBg : bg ? theme.colors[bg] : theme.colors.tertiary)};
  text-align: center;
  cursor: pointer;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  border-radius: ${({ radius, theme }) => radius || theme.radius.button};
  min-width: max-content;
  height: 55px;
  padding: 15px 35px;
  border: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default Button;
