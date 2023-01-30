import { toResponsiveVariants } from "~ui/helpers";

const variants = {
  eyebrow: {
    fontFamily: "sans",
    fontSize: 16,
    fontWeight: 900,
  },
  label: {
    fontSize: 2,
    fontFamily: "sans",
    fontWeight: 600,
  },
  paragraph: {
    fontFamily: "sans",
    fontSize: "body",
    lineHeight: 1.4,
  },
  title: {
    fontFamily: "sans",
    fontWeight: 900,
    fontSize: toResponsiveVariants({
      sm: 48,
      md: 72,
      lg: 96,
    }),
  },
};

export default variants;
