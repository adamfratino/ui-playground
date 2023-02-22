const primary = {
  box: {
    paddingX: 5,
    paddingY: 2,
    backgroundColor: "reds.dark",
    color: "white",
    borderRadius: "4px",
    boxShadow: "box.shallow",
    transition: "all 100ms ease",
    "&:hover": {
      backgroundColor: "reds.darker",
    },
  },
  text: {
    textShadow: "text.medium",
  },
};

const secondary = {
  box: {
    ...primary.box,
    backgroundColor: "transparent",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
};

const variants = {
  primary,
  secondary,
};

export default variants;
