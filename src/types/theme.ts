export type Breakpoints = string[];

export type MediaQueries = {
  min: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    nav: string;
  };
  max: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    nav: string;
  };
};

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
  rounded: string;
  button: string;
};

export type Shadows = {
  level1: string;
  level2: string;
  card: string;
};

export type ShadowsProps = keyof Shadows;

export type Gradient = {
  primary: string;
  secondary: string;
  tetiary: string;
};

export interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  nint: string;
  text: string;
  black: string;
  white: string;
  gradient: Gradient;
}

export type ColorsProps = keyof Colors;

export type ZIndices = {
  dropdown: number;
  modal: number;
  sidebar: number;
};

export type ZIndicesProps = keyof ZIndices;

interface Fonts {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  hero: string;
}

interface Line {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface FontSizes extends Fonts {
  screenMd: Fonts;
}

export interface LineHeights extends Line {
  screenMd: Line;
}

export type FontSizesProps = keyof Fonts;
export type LineHeightProps = keyof Line;

export type QueryProps = keyof MediaQueries;
