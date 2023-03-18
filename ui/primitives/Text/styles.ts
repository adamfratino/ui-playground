import { CSSProperties } from "theme-ui";

export type StyleProps = {
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
};

const styles = {
  "strong, b": {
    fontWeight: "bold",
  },
  "em, i": {
    fontStyle: "italic",
  },
  a: {
    color: "inherit",
    textDecoration: "underline",
  },
} as const;

export default styles;
