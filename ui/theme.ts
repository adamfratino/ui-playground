import primitives from "./primitives";
import styles from "./styles";
import tokens, { fonts, fontSizes, space } from "~ui/tokens";

/** Theme */
const theme = {
  ...primitives,
  ...tokens,
  fonts,
  fontSizes,
  space,
  styles,
};

export default theme;
