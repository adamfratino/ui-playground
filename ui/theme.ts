import primitives from "./primitives";
import styles from "./styles";
import tokens, {
  breakpoints,
  fonts,
  fontSizes,
  shadows,
  space,
} from "~ui/tokens";

/** Theme */
const theme = {
  ...primitives,
  ...tokens,
  breakpoints,
  fonts,
  fontSizes,
  shadows,
  space,
  styles,
};

export default theme;
