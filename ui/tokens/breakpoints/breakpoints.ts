import { px } from "~ui/helpers";

/**
 * @see: https://github.com/styled-system/styled-system/issues/1318
 * @todo: add option for breakpoints object (for props only, no variants)?
 */

const breakpoints = {
  default: 0,
  sm: px(414),
  md: px(768),
  lg: px(1024),
} as const;

export { breakpoints };
