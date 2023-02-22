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
  },
  "tbody tr:nth-child(even)": {
    backgroundColor: "background.light",
  },
};

const variants = {
  events,
};

export default variants;
