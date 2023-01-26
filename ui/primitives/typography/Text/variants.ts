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
  description: {},
  label: {
    fontSize: "12px",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
  },
};

export default variants;
