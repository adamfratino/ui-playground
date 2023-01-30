import { sans } from "~ui/tokens/typography";
import { toBreakpointsArray } from "~ui/helpers";

const variants = {
  eyebrow: {
    fontFamily: sans,
    fontSize: 16,
    fontWeight: 900,
  },
  label: {
    fontSize: 2,
    fontFamily: sans,
    fontWeight: 600,
  },
  paragraph: {
    fontFamily: sans,
    fontSize: 14,
    lineHeight: 1.4,
  },
  title: {
    fontSize: toBreakpointsArray({
      sm: 48,
      md: 72,
      lg: 96,
    }),
    fontWeight: 700,
  },
};

export default variants;
