import { breakpoints } from "~ui/tokens/breakpoints";
import { colors } from "~ui/tokens/colors";
import { space } from "~ui/tokens/space";

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

colors.backgroundColor = {
  light: "#eee",
  dark: "#222",
};
colors.textColor = "black";
colors.primaryColor = colors.red.base;

space.thin = space[3];
space.thick = space[5];

const theme = {
  colors,
  breakpoints,
  space,
};

export default theme;
