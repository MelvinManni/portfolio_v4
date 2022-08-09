import { DefaultTheme } from "styled-components";
import { Breakpoints, Colors, FontSizes, Gradient, LineHeights, MediaQueries, Radii, Shadows, ZIndices } from "types/theme";

const breakpointMap: { [key: string]: number } = {
  xs: 320,
  sm: 540,
  md: 768,
  lg: 968,
  xl: 1440,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  min: {
    xs: `@media all and (min-width: ${breakpointMap.xs}px)`,
    sm: `@media all and (min-width: ${breakpointMap.sm}px)`,
    md: `@media all and (min-width: ${breakpointMap.md}px)`,
    lg: `@media all and (min-width: ${breakpointMap.lg}px)`,
    xl: `@media all and (min-width: ${breakpointMap.xl}px)`,
    nav: `@media all and (min-width: ${breakpointMap.lg}px)`,
  },
  max: {
    xs: `@media all and (max-width: ${breakpointMap.xs}px)`,
    sm: `@media all and (max-width: ${breakpointMap.sm}px)`,
    md: `@media all and (max-width: ${breakpointMap.md}px)`,
    lg: `@media all and (max-width: ${breakpointMap.lg}px)`,
    xl: `@media all and (max-width: ${breakpointMap.xl}px)`,
    nav: `@media all and (max-width: ${breakpointMap.lg}px)`,
  },
};

const fontSizes: FontSizes = {
  xs: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "48px",
  xxl: "64px",
  hero: "72px",
  screenMd: {
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "28px",
    xxl: "44px",
    hero: "52px",
  },
};

const lineHeights: LineHeights = {
  xs: "22px",
  sm: "24px",
  md: "28px",
  lg: "30px",
  xl: "78px",
  xxl: "182px",
  screenMd: {
    xs: "20px",
    sm: "22px",
    md: "24px",
    lg: "28px",
    xl: "30px",
    xxl: "72px",
  },
};

const radius: Radii = {
  card: "16px",
  small: "5px",
  circle: "50%",
  default: "8px",
  button: "10px",
  rounded: "20px",
};

const shadows: Shadows = {
  level1: "0px 15px 30px rgba(229, 229, 245, 0.55)",
  level2: " 0px 0px 17px 0px rgba(41, 72, 152, 0.25)",
  card: "0px 4px 10px rgba(0, 0, 0, 0.12);",
};

const gradient: Gradient = {
  primary: "linear-gradient(225deg, #5B8FCB 0%, #583895 100%);",
  secondary: "linear-gradient(225deg, #99D5C6 3.26%, #50C8EF 98.18%);",
  tetiary: "linear-gradient(95.48deg, rgba(255, 255, 255, 0.3) 2.95%, rgba(255, 255, 255, 0) 95.37%);",
};

const colors: Colors = {
  primary: "#583895",
  secondary: "#5B8FCB",
  tertiary: "#50C8EF",
  nint: "#99D5C6",
  text: "#17151D",
  black: "#1F1D26",
  white: "#FFFFFF",
  gradient,
};

const zIndices: ZIndices = {
  dropdown: 200,
  modal: 400,
  sidebar: 800,
};

const theme: DefaultTheme = {
  mediaQueries,
  breakpoints,
  fontSizes,
  colors: colors,
  radius,
  shadows,
  zIndices,
  lineHeights,
};

export default theme;
