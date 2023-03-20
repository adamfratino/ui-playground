/** @todo convert to Text style to import */
export const textStyles = {
  fontSize: 2,
  textTransform: "uppercase",
  fontFamily: "sans",
  fontWeight: 600,
  letterSpacing: "0.075em",
};

const primary = {
  paddingX: 8,
  paddingY: 2,
  backgroundColor: "red",
  color: "black",
  boxShadow: "box.shallow",
  "&:hover": {
    filter: "saturate(115%)",
    transform: "scale(1.02)",
  },
  ...textStyles,
};

export default primary;
