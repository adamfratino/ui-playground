import { Box } from "~ui/primitives";
import { PositionProps } from "styled-system";
import { forwardRef } from "react";

type Props = PositionProps & {
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
