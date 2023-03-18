import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  shadows,
  space,
} from "~ui/tokens";
import { primitiveVariants } from "./primitives";

/** Breakpoints */
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

/** Colors */
colors.white = colors.whites.light;
colors.black = colors.blacks.dark;
colors.background = { light: colors.white, dark: colors.black };
colors.text = { light: colors.white, dark: colors.dark };
colors.brand = { primary: colors.reds.dark };
colors.notification = {
  alert: colors.reds.dark,
  warning: colors.yellows.base,
  success: colors.greens.light,
};

/** Space */
space.thin = space[3];
space.thick = space[4];

/** Theme */
const theme = {
  ...primitiveVariants,
  colors,
  breakpoints,
  fonts,
  fontSizes,
  shadows,
  space,
};

export default theme;
