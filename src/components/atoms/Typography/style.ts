import styled from "styled-components";

import { TextStyleProps } from "components/types";

export const TextStyle = styled.p<TextStyleProps>`
	display: ${({ display }) => display};
	font-size: ${({ size, theme }) =>
		size ? theme.fontSizes[size] : theme.fontSizes.md};
	line-height: ${({ size, theme }) =>
		size ? theme.lineHeights[size] : theme.lineHeights.md};
	color: ${({ color, customColor, theme }) =>
		customColor
			? customColor
			: color
			? theme.colors[color]
			: theme.colors.text};
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

	${({ theme }) => theme.mediaQueries.max.sm} {
		font-size: ${({ size, theme }) =>
			size ? theme.fontSizes.screenSm[size] : theme.fontSizes.screenSm.md};
		line-height: ${({ size, theme }) =>
			size ? theme.lineHeights.screenSm[size] : theme.lineHeights.screenSm.md};
	}
`;
