/** @todo figure out folder structure for multiple variants? (Table, TableCell, etc.) */

const events = {
  th: {
    backgroundColor: "black",
    color: "white",
    boxShadow: "box.shallow",
  },
  "th, td": {
    padding: 4,
    textAlign: "left",
    fontFamily: "sans",
    fontSize: 3,
    lineHeight: 1.2,
  },
  "tbody tr:nth-of-type(even)": {
    backgroundColor: "white",
  },
};

const variants = {
  events,
};

export default variants;
