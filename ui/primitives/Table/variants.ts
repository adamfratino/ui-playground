const thick = {
  padding: 4,
};

const leftAlign = {
  textAlign: "left",
};

const invert = {
  backgroundColor: "background.dark",
  color: "background.light",
};

const alternateColors = {
  th: {
    ...invert,
  },
  "th, td": {
    ...thick,
    ...leftAlign,
  },
  "& tbody tr:nth-child(even)": {
    backgroundColor: "background.light",
  },
};

const variants = {
  alternateColors,
};

export default variants;
