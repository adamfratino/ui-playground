import { CSSProperties } from "react";

type ThemeType = {
  textColor?: CSSProperties["color"];
};

export type ColorType = {
  darkest?: CSSProperties["color"];
  darker?: CSSProperties["color"];
  dark?: CSSProperties["color"];
  base?: CSSProperties["color"];
  light?: CSSProperties["color"];
  lighter?: CSSProperties["color"];
  lightest?: CSSProperties["color"];
};

export type ColorsType = ThemeType & { [name: string]: {} };
