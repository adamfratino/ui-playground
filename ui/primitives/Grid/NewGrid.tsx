import { forwardRef } from "react";
import { Grid, GridProps } from "theme-ui";
// import { isCentered, trimEdges, StyleProps } from "./styles";
import variants from "./variants";

type OtherProps = {
  as?: React.ElementType<any>;
  variant?: keyof typeof variants;
};

export type Props = React.HTMLAttributes<HTMLDivElement> &
  GridProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/grid
 */
const GridPrimitive = forwardRef<HTMLDivElement, Props>(
  ({ children, as, variant = undefined, sx, ...props }, ref) => (
    <Grid {...props} ref={ref} as={as} variant={variant} sx={sx}>
      {children}
    </Grid>
  )
);

GridPrimitive.displayName = "Grid";

export default GridPrimitive;
