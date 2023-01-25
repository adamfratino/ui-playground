import { px } from "~ui/helpers";

/**
 * @see: https://github.com/styled-system/styled-system/issues/1318
 */

export type BreakpointsType = {
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
};

const breakpoints: Array<string> & BreakpointsType = [
  px(414),
  px(768),
  px(1024),
  px(1440),
];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default breakpoints;
