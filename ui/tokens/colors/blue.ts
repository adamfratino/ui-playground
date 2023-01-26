import { darken, lighten } from "polished";
import { ColorType } from "./colors.types";

const base = `#3DB2FF`;

const blue: ColorType = {
  darkest: darken(0.25, base),
  darker: darken(0.2, base),
  dark: darken(0.1, base),
  base: base,
  light: lighten(0.1, base),
  lighter: lighten(0.2, base),
  lightest: lighten(0.25, base),
} as const;

export default blue;
