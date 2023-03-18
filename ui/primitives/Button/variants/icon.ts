const icon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 24,
  width: 24,
  backgroundColor: "background.dark",
  color: "text.light",
  textIndent: "-9999px",
  fontSize: 3,
  "&:hover": {
    fontWeight: "bold",
  },
  "&:before": {
    content: '"x"',
    textIndent: 0,
  },
};

export default icon;
