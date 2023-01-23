import { breakpoints } from "~ui/tokens/breakpoints";
import { baseFontSize } from "~ui/tokens/typography";

/** Converts number to px */
export const px = (pixels: number) => `${pixels}px`;

/** Converts number in px to rem using baseFontSize */
export const rem = (pixels: number, base: number = baseFontSize) =>
  `${pixels / baseFontSize}rem`;

/** Converts a string to a number */
export const num = (string: string) => +string.match(/(\d+)/)![0];

/** Converts a breakpoint object to a breakpoint array */
export const toBreakpointsArray = (customBreakpoints: {}) => {
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
