import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  shadows,
  space,
} from "~ui/tokens";
import { primitiveVariants } from "./primitives";

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

/**
 * Styles?
 * Currently using <BaseStyles /> as a decorator to apply style defaults.
 * */
const styles = {
  button: {
    borderRadius: 0,
    cursor: "pointer",
    ":disabled": {
      cursor: "not-allowed",
    },
  },
};

/** Theme */
const theme = {
  ...primitiveVariants,
  colors,
  breakpoints,
  fonts,
  fontSizes,
  shadows,
  space,
  styles,
};

export default theme;
