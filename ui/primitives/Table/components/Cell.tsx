import { Box } from "~ui/primitives";

type Props = {
  type?: "head" | "body";
  children?: React.ReactNode;
};

const Cell: React.FC<Props> = ({ type = "body", children }) => {
  const element = type === "head" ? "th" : "td";
  return <Box as={element}>{children}</Box>;
};

export default Cell;
