import { darken, lighten } from "polished";

export const generatePalette = (color: string) => ({
  darkest: darken(0.25, color),
  darker: darken(0.2, color),
  dark: darken(0.1, color),
  base: color,
  light: lighten(0.1, color),
  lighter: lighten(0.2, color),
  lightest: lighten(0.25, color),
});
