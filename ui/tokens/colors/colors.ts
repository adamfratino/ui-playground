import { darken, lighten } from "polished";
import { TokensType } from "~ui/tokens/types";

export const red = `#FF4949` as const;
export const orange = `#FF8D29` as const;
export const yellow = `#FFC005` as const;
export const green = `#00AF91` as const;
export const blue = `#3DB2FF` as const;
export const purple = `#6E1DBC` as const;
export const grey = `#7F7F7F` as const;
export const black = `#222` as const;
export const white = `#DDD` as const;

export const generatePalette = (key: string, color: string) => ({
  [key]: {
    darkest: darken(0.25, color),
    darker: darken(0.2, color),
    dark: darken(0.1, color),
    base: color,
    light: lighten(0.1, color),
    lighter: lighten(0.2, color),
    lightest: lighten(0.25, color),
  },
});

const colors: TokensType = {
  ...generatePalette("reds", red),
  ...generatePalette("oranges", orange),
  ...generatePalette("yellows", yellow),
  ...generatePalette("greens", green),
  ...generatePalette("blues", blue),
  ...generatePalette("purples", purple),
  ...generatePalette("greys", grey),
  ...generatePalette("blacks", black),
  ...generatePalette("whites", white),
} as const;

export default colors;
