import { CSSProperties } from "theme-ui";

export type StyleProps = {
  inline?: boolean;
  gap?: CSSProperties["gap"];
};

export const baseStyles = {
  gridGap: "unset",
};
