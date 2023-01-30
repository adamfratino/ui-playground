import { breakpoints } from "~ui/tokens";

/**
 * Converts a breakpoint object to a breakpoint array
 * @param customBreakpoints takes an object with breakpoint keys (`sm`, `md`, `lg`, etc.)
 * @returns array of breakpoint values or `null` if a breakpoint key isn't present
 * @see https://styled-system.com/responsive-styles/
 * */
const toResponsiveVariants = (customBreakpoints: {}) => {
  let array: any[] = [];
  let customCount = 0;

  Object.entries(breakpoints).map((bp, i) => {
    if (i > breakpoints.length - 1) {
      if (bp[0] === Object.keys(customBreakpoints)[customCount]) {
        array.push(Object.values(customBreakpoints)[customCount]);
        customCount++;
      } else {
        array.push(null);
      }
    }
  });

  return array;
};

export default toResponsiveVariants;
