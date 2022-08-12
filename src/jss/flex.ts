import { ALIGN_CONTENT, FLEX, FLEX_DIRECTION, FLEX_WRAP, GAP, JUSTIFY_CONTENT } from "css-properties-props";
import styled from "styled-components";
import { SpacingStyle } from "./spacing";
import { ColProps } from "types/jss";

interface Props {
  flexWrap?: FLEX_WRAP;
  alignItems?: ALIGN_CONTENT;
  justifyContent?: JUSTIFY_CONTENT;
  flexDirection?: FLEX_DIRECTION;

  // 1400px
  flexWrapXl?: FLEX_WRAP;
  alignItemsXl?: ALIGN_CONTENT;
  justifyContentXl?: JUSTIFY_CONTENT;
  flexDirectionXl?: FLEX_DIRECTION;

  // 968px
  flexWrapLg?: FLEX_WRAP;
  alignItemsLg?: ALIGN_CONTENT;
  justifyContentLg?: JUSTIFY_CONTENT;
  flexDirectionLg?: FLEX_DIRECTION;

  //  852px
  flexWrapMd?: FLEX_WRAP;
  alignItemsMd?: ALIGN_CONTENT;
  justifyContentMd?: JUSTIFY_CONTENT;
  flexDirectionMd?: FLEX_DIRECTION;

  // 576px
  flexWrapSm?: FLEX_WRAP;
  alignItemsSm?: ALIGN_CONTENT;
  justifyContentSm?: JUSTIFY_CONTENT;
  flexDirectionSm?: FLEX_DIRECTION;

  // 370px
  flexWrapXs?: FLEX_WRAP;
  alignItemsXs?: ALIGN_CONTENT;
  justifyContentXs?: JUSTIFY_CONTENT;
  flexDirectionXs?: FLEX_DIRECTION;

  // Child Flex
  itemsFlex?: FLEX;
  itemsFlexXl?: FLEX;
  itemsFlexLg?: FLEX;
  itemsFlexMd?: FLEX;
  itemsFlexSm?: FLEX;
  itemsFlexXs?: FLEX;

  // parent fles
  flex?: FLEX;
  flexXl?: FLEX;
  flexLg?: FLEX;
  flexMd?: FLEX;
  flexSm?: FLEX;
  flexXs?: FLEX;

  gap?: GAP;
}

const FlexStyle = styled(SpacingStyle)<Props>`
  width: 100%;
  display: flex;
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex: ${({ flex }) => flex || "unset"};
  > * {
    flex: ${({ itemsFlex }) => itemsFlex};
  }

  ${({ theme }) => theme.mediaQueries.max.xl} {
    flex: ${({ flexXl }) => flexXl || "unset"};
    flex-direction: ${({ flexDirectionXl }) => flexDirectionXl};
    justify-content: ${({ justifyContentXl }) => justifyContentXl};
    align-items: ${({ alignItemsXl }) => alignItemsXl};
    flex-wrap: ${({ flexWrapXl }) => flexWrapXl};
    > * {
      flex: ${({ itemsFlexXl }) => itemsFlexXl};
    }
  }

  ${({ theme }) => theme.mediaQueries.max.lg} {
    flex: ${({ flexLg }) => flexLg || "unset"};
    flex-direction: ${({ flexDirectionLg }) => flexDirectionLg};
    justify-content: ${({ justifyContentLg }) => justifyContentLg};
    align-items: ${({ alignItemsLg }) => alignItemsLg};
    flex-wrap: ${({ flexWrapLg }) => flexWrapLg};
    > * {
      flex: ${({ itemsFlexLg }) => itemsFlexLg};
    }
  }
  ${({ theme }) => theme.mediaQueries.max.md} {
    flex: ${({ flexMd }) => flexMd || "unset"};
    flex-direction: ${({ flexDirectionMd }) => flexDirectionMd};
    justify-content: ${({ justifyContentMd }) => justifyContentMd};
    align-items: ${({ alignItemsMd }) => alignItemsMd};
    flex-wrap: ${({ flexWrapMd }) => flexWrapMd};
    > * {
      flex: ${({ itemsFlexMd }) => itemsFlexMd};
    }
  }
  ${({ theme }) => theme.mediaQueries.max.sm} {
    flex: ${({ flexSm }) => flexSm || "unset"};
    flex-direction: ${({ flexDirectionSm }) => flexDirectionSm};
    justify-content: ${({ justifyContentSm }) => justifyContentSm};
    align-items: ${({ alignItemsSm }) => alignItemsSm};
    flex-wrap: ${({ flexWrapSm }) => flexWrapSm};
    > * {
      flex: ${({ itemsFlexSm }) => itemsFlexSm};
    }
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    flex: ${({ flexXs }) => flexXs || "unset"};
    flex-direction: ${({ flexDirectionXs }) => flexDirectionXs};
    justify-content: ${({ justifyContentXs }) => justifyContentXs};
    align-items: ${({ alignItemsXs }) => alignItemsXs};
    flex-wrap: ${({ flexWrapXs }) => flexWrapXs};
    > * {
      flex: ${({ itemsFlexXs }) => itemsFlexXs};
    }
  }
`;

export const Gridstyle = styled(SpacingStyle)<Props>`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  row-gap: 30px;
  > div {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const ColStyles = styled(SpacingStyle)<ColProps>`
  width: 100%;
  overflow: visible;
  ${({ theme, xs }) =>
    xs
      ? ` ${theme.mediaQueries.min.xs}{
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 ${(xs * 100) / 12}%;
    -ms-flex: 0 0 ${(xs * 100) / 12}%;
    flex: 0 0 ${(xs * 100) / 12}%;
    max-width: ${(xs * 100) / 12}%;
  }`
      : ""}

  ${({ theme, sm }) =>
    sm
      ? ` ${theme.mediaQueries.min.sm}{
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 ${(sm * 100) / 12}%;
    -ms-flex: 0 0 ${(sm * 100) / 12}%;
    flex: 0 0 ${(sm * 100) / 12}%;
    max-width: ${(sm * 100) / 12}%;
  }`
      : ""}


  ${({ theme, md }) =>
    md
      ? ` ${theme.mediaQueries.min.md}{
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 ${(md * 100) / 12}%;
    -ms-flex: 0 0 ${(md * 100) / 12}%;
    flex: 0 0 ${(md * 100) / 12}%;
    max-width: ${(md * 100) / 12}%;
  }`
      : ""}

  ${({ theme, lg }) =>
    lg
      ? ` ${theme.mediaQueries.min.lg}{
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 ${(lg * 100) / 12}%;
    -ms-flex: 0 0 ${(lg * 100) / 12}%;
    flex: 0 0 ${(lg * 100) / 12}%;
    max-width: ${(lg * 100) / 12}%;
  }`
      : ""}

            
${({ col }) =>
    col
      ? `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 ${(col * 100) / 12}%;
    -ms-flex: 0 0 ${(col * 100) / 12}%;
    flex: 0 0 ${(col * 100) / 12}%;
    max-width: ${(col * 100) / 12}%;
  `
      : ""}
`;

export default FlexStyle;
