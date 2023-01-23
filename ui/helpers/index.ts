import { baseFontSize } from "~ui/tokens/typography";

/** Converts number to px */
export const px = (pixels: number) => `${pixels}px`;

/** Converts number in px to rem using baseFontSize */
export const rem = (pixels: number, base: number = baseFontSize) =>
  `${pixels / baseFontSize}rem`;

/** Converts a string to a number */
export const num = (string: string) => +string.match(/(\d+)/)![0];
