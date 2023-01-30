import { darken, lighten } from "polished";
import { TokensType } from "~ui/tokens/types";

export const red = `#FF4949`;
export const orange = `#FF8D29`;
export const yellow = `#FFC005`;
export const green = `#00AF91`;
export const blue = `#3DB2FF`;
export const purple = `#6E1DBC`;

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
};

export default colors;
