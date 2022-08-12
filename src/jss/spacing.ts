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
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;

}

interface StyleProps {
  customBg?: string;
  bg?: ColorsProps;
}

export const SpacingStyle = styled.div<SpacingProps>`
  background: ${({ bg, customBg, theme }) => (customBg ? customBg : bg ? theme.colors[bg] : null)};
  padding: ${({ padding }) => padding || null};
  padding-top: ${({ paddingTop, paddingYaxis }) => paddingYaxis || paddingTop};
  padding-bottom: ${({ paddingBottom, paddingYaxis }) => paddingYaxis || paddingBottom};
  padding-left: ${({ paddingLeft, paddingXaxis }) => paddingXaxis || paddingLeft};
  padding-right: ${({ paddingRight, paddingXaxis }) => paddingXaxis || paddingRight};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop, marginYaxis }) => marginYaxis || marginTop};
  margin-bottom: ${({ marginBottom, marginYaxis }) => marginYaxis || marginBottom};
  margin-right: ${({ marginRight, marginXaxis }) => marginXaxis || marginRight};
  margin-left: ${({ marginLeft, marginXaxis }) => marginXaxis || marginLeft};

  ${({ theme }) => theme.mediaQueries.max.xl} {
    ${(props) => mapSpacingToQuery("Xl", props)}
    ${({ hideXl }) => hideXl && "display: none;"}
  }

  ${({ theme }) => theme.mediaQueries.max.lg} {
    ${(props) => mapSpacingToQuery("Lg", props)}
    ${({ hideLg }) => hideLg && "display: none;"}
  }

  ${({ theme }) => theme.mediaQueries.max.md} {
    ${(props) => mapSpacingToQuery("Md", props)}
    ${({ hideMd }) => hideMd && "display: none;"}
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    ${(props) => mapSpacingToQuery("Sm", props)}
    ${({ hideSm }) => hideSm && "display: none;"}
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    ${(props) => mapSpacingToQuery("Xs", props)}
    ${({ hideXs }) => hideXs && "display: none;"}
  }
`;

export const ContainerStyle = styled(SpacingStyle)<StyleProps>`
  padding: 0px 170px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.max.xl} {
    padding: 0px 100px;
  }

  ${({ theme }) => theme.mediaQueries.max.lg} {
    padding: 0px 90px;
  }

  ${({ theme }) => theme.mediaQueries.max.md} {
    padding: 0px 40px;
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    padding: 0px 20px;
  }
`;

function mapSpacingToQuery(query: "Xs" | "Sm" | "Md" | "Lg" | "Xl", props: SpacingProps) {
  const spacing = `
  padding: ${props[`padding${query}`]} ;
  padding-top: ${props[`padding${query}Yaxis`] || props[`padding${query}Top`]} ;
  padding-bottom: ${props[`padding${query}Yaxis`] || props[`padding${query}Bottom`]} ;
  padding-left: ${props[`padding${query}Xaxis`] || props[`padding${query}Left`]} ;
  padding-right: ${props[`padding${query}Xaxis`] || props[`padding${query}Right`]} ;
  margin: ${props[`margin${query}`]} ;
  margin-top: ${props[`margin${query}Yaxis`] || props[`margin${query}Top`]} ;
  margin-bottom: ${props[`margin${query}Yaxis`] || props[`margin${query}Bottom`]} ;
  margin-left: ${props[`margin${query}Xaxis`] || props[`margin${query}Left`]} ;
  margin-right: ${props[`margin${query}Xaxis`] || props[`margin${query}Right`]} ;
  `;

  return spacing;
}
