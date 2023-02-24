/** @todo figure out folder structure for multiple variants? (Table, TableCell, etc.) */

const events = {
  th: {
    backgroundColor: "background.dark",
    color: "background.light",
    boxShadow: "box.shallow",
  },
  "th, td": {
    padding: 4,
    textAlign: "left",
    fontFamily: "sans",
    fontSize: 3,
    lineHeight: 1.2,
  },
  "tbody tr:nth-child(even)": {
    backgroundColor: "background.light",
  },
};

const variants = {
  events,
};

export default variants;
