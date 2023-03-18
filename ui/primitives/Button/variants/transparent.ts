import primary from "./primary";

const transparent = {
  ...primary,
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "black",
  "&:hover": {
    ...primary["&:hover"],
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};

export default transparent;
