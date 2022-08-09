import {
	DISPLAY,
	MARGIN_BOTTOM,
	MARGIN_LEFT,
	MARGIN_RIGHT,
	MARGIN_TOP,
} from "css-properties-props";
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
font-size: ${({ theme }) => theme.fontSizes.md};
line-height: ${({ theme }) => theme.lineHeights.md};
color: ${({ color, customColor, theme }) => (customColor ? customColor : color ? theme.colors[color] : theme.colors.white)};
background-color: ${({ bg, customBg, theme }) => (customBg ? customBg : bg ? theme.colors[bg] : theme.colors.primary)};
text-align: center;
cursor: pointer;
margin-top: ${({ marginTop }) => marginTop};
margin-bottom: ${({ marginBottom }) => marginBottom};
margin-left: ${({ marginLeft }) => marginLeft};
margin-right: ${({ marginRight }) => marginRight};
font-weight: 600;
border-radius: ${({ radius, theme }) => radius || theme.radius.default};
min-width: 130px;
height: 55px;
padding: 15px 35px;
border: 0;
position: relative;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
&:hover {
  box-shadow: 0px 9px 25px -1px rgba(179, 185, 199, 0.77);
}
`;

export default Button;
