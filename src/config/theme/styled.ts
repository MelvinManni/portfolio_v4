import { Colors, Breakpoints, FontSizes, MediaQueries, Radii, Shadows, ZIndices, LineHeights } from "types/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    breakpoints: Breakpoints;
    fontSizes: FontSizes;
    mediaQueries: MediaQueries;
    radius: Radii;
    shadows: Shadows;
    zIndices: ZIndices;
    lineHeights: LineHeights;
  }
}
