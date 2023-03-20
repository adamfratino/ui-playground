import { forwardRef, HTMLAttributes } from "react";
import { Box, BoxProps } from "~ui/primitives";

export type Props = HTMLAttributes<HTMLTableElement> & BoxProps;

const Table = forwardRef<HTMLTableElement, Props>(
  ({ children, ...props }, ref) => (
    <Box {...props} ref={ref} as="table">
      {children}
    </Box>
  )
);
Table.displayName = "Table";

export default Table;
