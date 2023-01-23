import { neutrals, rainbow } from "./tokens/colors";
import { monospaceFont, primaryFont } from "./tokens/typography";
import { themes as headlines } from "./primitives/Headline/themes";
import { px } from "./helpers";

/**
 * @see: https://github.com/styled-system/styled-system/issues/1318
 * @todo: clean up to use a single breakpoints object as source of truth
 */
type Breakpoints = string[] & {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

const breakpoints: Breakpoints = [
  px(360),
  px(414),
  px(768),
  px(1024),
  px(1440),
];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const colors = {
  light: neutrals.white,
  primary: rainbow.yellow,
  secondary: rainbow.red,
  tertiary: rainbow.green,
  dark: neutrals.black,
};

const fontFamilies = {
  headline: primaryFont,
  body: primaryFont,
  code: monospaceFont,
};

const theme = {
  headlines,
  breakpoints,
  colors,
  fontFamilies,
};

export default theme;
