import { breakpoints, BreakpointsType } from "~ui/tokens/breakpoints";
import { baseFontSize } from "~ui/tokens/typography";

/** Converts number to px */
export const px = (pixels: number) => `${pixels}px`;

/**
 * Converts number in px to rem using baseFontSize
 *
 * @todo replace with polished
 * @see https://polished.js.org/docs/#rem
 * */
export const rem = (pixels: number, base: number = baseFontSize) =>
  `${pixels / baseFontSize}rem`;

/**
 * Converts a string to a number
 *
 * @param string i.e. `48px`
 * @returns 48
 *
 * @todo replace with polished
 * @see https://polished.js.org/docs/#stripunit
 * */
export const num = (string: string) => +string.match(/(\d+)/)![0];

/**
 * Converts a breakpoint object to a breakpoint array
 * @param customBreakpoints takes an object with breakpoint keys (`sm`, `md`, `lg`, etc.)
 * @returns array of breakpoint values or `null` if a breakpoint key isn't present
 * @see https://styled-system.com/responsive-styles/
 * */
export const toBreakpointsArray = (customBreakpoints: BreakpointsType) => {
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
