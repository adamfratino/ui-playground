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
colors.background = { light: "#eee", dark: "#222" };
colors.text = {
  body: { light: "#eee", dark: "#222" },
};
colors.primary = colors.reds.dark;
colors.red = colors.blue;

/** Space */
space.superThin = space[1];
space.thin = space[3];
space.thick = space[4];
space.superthick = space[8];

/** Typography */
fontSizes.base = fontSizes[4];
fontSizes.body = fontSizes.base;

const theme = {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  shadows,
  space,
};

export default theme;
