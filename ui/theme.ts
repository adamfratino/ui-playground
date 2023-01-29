import { breakpoints, colors, space } from "~ui/tokens";
import { fontSizes } from "~ui/tokens/typography";

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

const theme = {
  colors,
  breakpoints,
  fontSizes,
  space,
};

export default theme;
