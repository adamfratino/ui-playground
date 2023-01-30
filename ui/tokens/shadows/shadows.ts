import { TokensType } from "~ui/tokens/types";

export const box = {
  inset: `rgba(0, 0, 0, 0.95) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset`,
  overlapping: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
};

export const text = {
  dark: `1px 1px 1px black`,
  light: `1px 1px 1px white`,
};

const shadows: TokensType = {
  box,
  text,
};

export default shadows;
