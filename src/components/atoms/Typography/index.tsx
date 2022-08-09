import { ReactElement } from "react";
import { TextStyleProps } from "components/types";
import { TextStyle } from "./style";

export interface TextProps extends TextStyleProps {
	as?: "h1" | "h2" | "h3" | "h4" | "span" | "li" | "label" | "small" | "a";
	children?:
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactPortal
		| string
		| any;
}

function Text(props: TextProps): ReactElement {
	return <TextStyle {...props}>{props.children}</TextStyle>;
}

export default Text;
