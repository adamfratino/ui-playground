const icon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  width: 36,
  backgroundColor: "black",
  color: "white",
  textIndent: "-9999px",
  fontSize: 4,
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&:before": {
    content: '"x"',
    textIndent: 0,
  },
};

export default icon;
