import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  shadows,
  space,
} from "~ui/tokens";

/** Breakpoints */
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

/** Colors */
colors.backgroundColor = { light: "#eee", dark: "#222" };
colors.textColor = "black";
colors.primaryColor = colors.reds.base;

/** Space */
space.thin = space[3];
space.thick = space[5];

/** Typography */
// fonts.eyebrow = fonts.condensed;
// fontSizes.test = 64;

const theme = {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  shadows,
  space,
};

export default theme;
