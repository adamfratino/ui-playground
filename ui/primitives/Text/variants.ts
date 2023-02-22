// import { toResponsiveVariants } from "~ui/helpers";

const eyebrow = {
  fontFamily: "sans",
  fontSize: 6,
  fontWeight: 900,
};

const label = {
  fontSize: 3,
  fontFamily: "sans",
};

const paragraph = {
  fontFamily: "sans",
  fontSize: "body",
  lineHeight: 1.4,
};

const title = {
  fontFamily: "sans",
  fontWeight: 900,
  fontSize: [48, 72, 96],
  // fontSize: toResponsiveVariants({
  //   sm: 48,
  //   md: 72,
  //   lg: 96,
  // }),
};

const variants = {
  eyebrow,
  label,
  paragraph,
  title,
};

export default variants;
