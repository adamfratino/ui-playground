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

const icon = {
  box: {
    height: 24,
    width: 24,
    backgroundColor: "background.dark",
    "&:hover": box.hover,
  },
  text: {
    color: "text.light",
    fontSize: 3,
  },
};

const reset = {
  box: {
    paddingY: 1,
    paddingX: 3,
    alignSelf: "center",
    border: "1px solid grey",
    borderRadius: "16px",
    backgroundColor: "transparent",
    "&:hover": {
      border: "2px solid grey",
      fontWeight: "bold",
    },
  },
  text: {
    fontSize: 2,
  },
};

const variants = {
  primary,
  secondary,
  filter,
  icon,
  big,
  reset,
  realBig,
};

export default variants;
