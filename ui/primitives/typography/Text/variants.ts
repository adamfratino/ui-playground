import { sans } from "~ui/tokens/typography";
import { toBreakpointsArray } from "~ui/helpers";

const variants = {
  title: {
    fontSize: toBreakpointsArray({
      sm: 48,
      md: 72,
      lg: 96,
    }),
    fontWeight: 700,
  },
  label: {
    fontSize: "12px",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
  },
  eyebrow: {
    fontFamily: sans,
    fontSize: 16,
    fontWeight: 900,
  },
  paragraph: {
    fontFamily: sans,
    fontSize: 14,
    lineHeight: 1.4,
  },
};

export default variants;
