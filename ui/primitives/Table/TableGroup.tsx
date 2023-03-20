import { Box, BoxProps } from "~ui/primitives/Box";

type Props = BoxProps & {
  type: "head" | "body" | "foot";
  children: React.ReactNode;
};

const TableGroup: React.FC<Props> = ({ type, children, ...props }) => {
  return (
    <Box as={`t${type}`} {...props} sx={{ zIndex: 1 }}>
      {children}
    </Box>
  );
};

export default TableGroup;
