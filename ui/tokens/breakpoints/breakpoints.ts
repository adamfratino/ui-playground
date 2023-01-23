import { px } from "~ui/helpers";

/**
 * @see: https://github.com/styled-system/styled-system/issues/1318
 * @todo: add option for breakpoints object (for props only, no variants)?
 */

type Breakpoints = Array<string> & {
  sm?: string;
  md?: string;
  lg?: string;
};

const breakpoints: Breakpoints = [px(768), px(1024), px(1440)];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

export { breakpoints };
