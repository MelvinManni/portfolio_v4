import {
	DISPLAY,
	MARGIN_BOTTOM,
	MARGIN_LEFT,
	MARGIN_RIGHT,
	MARGIN_TOP,
} from "css-properties-props";
import { FontFamily } from "types";
import { ColorsProps } from "types/theme";

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
	brSmall?: boolean;
	outline?: ColorsProps;
	loading?: boolean;
};

export { ButtonStyle as Button } from "./style";
