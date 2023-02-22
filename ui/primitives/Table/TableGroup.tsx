import { Box } from "~ui/primitives";

type Props = {
  type: "head" | "body" | "foot";
  children: React.ReactNode;
};

const TableGroup: React.FC<Props> = ({ type, children }) => {
  return <Box as={`t${type}`}>{children}</Box>;
};

export default TableGroup;
