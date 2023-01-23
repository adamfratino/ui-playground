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

export const headlines = {
  sm: {
    fontSize: {
      xs: 12,
      md: 24,
      lg: 48,
    },
  },
  md: {
    fontSize: [44, 88],
  },
};

const theme = {
  headlines,
  breakpoints,
  colors,
  fontFamilies,
};

export default theme;
