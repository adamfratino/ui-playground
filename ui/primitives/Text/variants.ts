import { toResponsiveVariants } from "~ui/helpers";

const variants = {
  eyebrow: {
    fontFamily: "sans",
    fontSize: 16,
    fontWeight: 900,
  },
  label: {
    fontSize: 3,
    fontFamily: "sans",
  },
  paragraph: {
    fontFamily: "sans",
    fontSize: "body",
    lineHeight: 1.4,
  },
  title: {
    fontFamily: "sans",
    fontWeight: 900,
    fontSize: [48, 72, 96],
    // fontSize: toResponsiveVariants({
    //   sm: 48,
    //   md: 72,
    //   lg: 96,
    // }),
  },
};

export default variants;
