const join = {
  box: {
    paddingX: 5,
    paddingY: 2,
    backgroundColor: "reds.base",
    color: "white",
    borderRadius: "4px",
    boxShadow: "box.shallow",
    transition: "all 100ms ease",
    "&:hover": {
      backgroundColor: "reds.dark",
    },
  },
  text: {
    textShadow: "text.medium",
  },
};

const variants = {
  join,
};

export default variants;
