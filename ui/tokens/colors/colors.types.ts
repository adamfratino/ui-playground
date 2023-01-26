import { CSSProperties } from "react";

export type ColorType = {
  darkest?: CSSProperties["color"];
  darker?: CSSProperties["color"];
  dark?: CSSProperties["color"];
  base?: CSSProperties["color"];
  light?: CSSProperties["color"];
  lighter?: CSSProperties["color"];
  lightest?: CSSProperties["color"];
};

export type ColorsType = {
  [name: string]: any;
};
