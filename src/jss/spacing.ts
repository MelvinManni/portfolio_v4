import styled from "styled-components";
import { ColorsProps } from "types/theme";
import { MarginProps, PaddingProps } from "types/jss";

interface SpacingProps extends MarginProps, PaddingProps {
  bg?: ColorsProps;
  customBg?: string;
  border?: number;
  borderTop?: number;
  borderBottom?: number;
  borderRight?: number;
  borderLeft?: number;
  borderColor?: ColorsProps;
}

interface StyleProps {
  customBg?: string;
  bg?: ColorsProps;
}

export const SpacingStyle = styled.div<SpacingProps>`
  background-color: ${({ bg, customBg, theme }) => (customBg ? customBg : bg ? theme.colors[bg] : null)} !important;
  padding: ${({ padding }) => padding} !important;
  padding-top: ${({ paddingTop, paddingYaxis }) => paddingYaxis || paddingTop} !important;
  padding-bottom: ${({ paddingBottom, paddingYaxis }) => paddingYaxis || paddingBottom} !important;
  padding-left: ${({ paddingLeft, paddingXaxis }) => paddingXaxis || paddingLeft} !important;
  padding-right: ${({ paddingRight, paddingXaxis }) => paddingXaxis || paddingRight} !important;
  margin: ${({ margin }) => margin} !important;
  margin-top: ${({ marginTop, marginYaxis }) => marginYaxis || marginTop} !important;
  margin-bottom: ${({ marginBottom, marginYaxis }) => marginYaxis || marginBottom} !important;
  margin-right: ${({ marginRight, marginXaxis }) => marginXaxis || marginRight} !important;
  margin-left: ${({ marginLeft, marginXaxis }) => marginXaxis || marginLeft} !important;
  border-color: ${({ borderColor, theme }) => theme.colors[borderColor || "primary"]};
  border-style: solid;
  border-top-width: ${({ borderTop, border }) => borderTop || border}px;
  border-bottom-width: ${({ borderBottom, border }) => borderBottom || border}px;
  border-right-width: ${({ borderRight, border }) => borderRight || border}px;
  border-left-width: ${({ borderLeft, border }) => borderLeft || border}px;

  ${({ theme }) => theme.mediaQueries.max.xl} {
    ${(props) => mapSpacingToQuery("Xl", props)}
  }

  ${({ theme }) => theme.mediaQueries.max.lg} {
    ${(props) => mapSpacingToQuery("Lg", props)}
  }

  ${({ theme }) => theme.mediaQueries.max.md} {
    ${(props) => mapSpacingToQuery("Md", props)}
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    ${(props) => mapSpacingToQuery("Sm", props)}
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    ${(props) => mapSpacingToQuery("Xs", props)}
  }
`;

export const ContainerStyle = styled(SpacingStyle)<StyleProps>`
  padding: 0px 105px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.max.xl} {
    padding: 0px 70px;
  }

  ${({ theme }) => theme.mediaQueries.max.lg} {
    padding: 0px 40px;
  }

  ${({ theme }) => theme.mediaQueries.max.md} {
    padding: 0px 30px;
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    padding: 0px 20px;
  }
`;

function mapSpacingToQuery(query: "Xs" | "Sm" | "Md" | "Lg" | "Xl", props: SpacingProps) {
  const spacing = `
  padding: ${props[`padding${query}`]} !important;
  padding-top: ${props[`padding${query}Yaxis`] || props[`padding${query}Top`]} !important;
  padding-bottom: ${props[`padding${query}Yaxis`] || props[`padding${query}Bottom`]} !important;
  padding-left: ${props[`padding${query}Xaxis`] || props[`padding${query}Left`]} !important;
  padding-right: ${props[`padding${query}Xaxis`] || props[`padding${query}Right`]} !important;
  margin: ${props[`margin${query}`]} !important;
  margin-top: ${props[`margin${query}Yaxis`] || props[`margin${query}Top`]} !important;
  margin-bottom: ${props[`margin${query}Yaxis`] || props[`margin${query}Bottom`]} !important;
  margin-left: ${props[`margin${query}Xaxis`] || props[`margin${query}Left`]} !important;
  margin-right: ${props[`margin${query}Xaxis`] || props[`margin${query}Right`]} !important;
  `;

  return spacing;
}
