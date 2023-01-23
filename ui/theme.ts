import { breakpoints } from "./tokens/breakpoints";
import { neutrals, rainbow } from "./tokens/colors";
import { monospaceFont, primaryFont } from "./tokens/typography";

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
  breakpoints,
  colors,
  fontFamilies,
};

export default theme;
