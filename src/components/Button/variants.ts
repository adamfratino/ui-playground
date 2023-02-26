/** @todo figure out how to separate helpers from variants */

const box = {
  hover: {
    filter: "saturate(115%)",
    transform: "scale(1.02)",
  },
};
const text = {
  condensed: {
    fontSize: 2,
    textTransform: "uppercase",
    fontFamily: "sans",
    fontWeight: 600,
    letterSpacing: "0.075em",
  },
};

const primary = {
  box: {
    paddingX: 5,
    paddingY: 2,
    backgroundColor: "brand.primary",
    color: "white",
    boxShadow: "box.shallow",
    "&:hover": box.hover,
  },
  text: text.condensed,
};

const secondary = {
  box: {
    ...primary.box,
    backgroundColor: "transparent",
    border: "1px solid white",
    "&:hover": {
      ...primary.box["&:hover"],
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
  text: primary.text,
};

const filter = {
  box: {
    padding: 2,
    boxShadow: "box.shallow",
    "&:hover": box.hover,
  },
  text: {
    ...text.condensed,
    fontSize: 1,
  },
};

const big = {
  box: {
    padding: 8,
    boxShadow: "box.shallow",
    "&:hover": box.hover,
  },
  text: {
    ...text.condensed,
    fontSize: 5,
    lineHeight: 1,
  },
};

const realBig = {
  box: {
    ...big.box,
    padding: 10,
  },
  text: {
    ...big.text,
  },
};

const arrow = {
  box: {
    height: 48,
    width: 48,
    backgroundColor: "background.dark",
    "&:hover": box.hover,
  },
  text: {
    color: "text.light",
    fontWeight: "bold",
    fontSize: 4,
  },
};

const variants = {
  primary,
  secondary,
  filter,
  arrow,
  big,
  realBig,
};

export default variants;
