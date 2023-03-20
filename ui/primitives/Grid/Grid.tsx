import { forwardRef } from "react";
import { Grid, GridProps } from "theme-ui";
import variants from "./variants";

type OtherProps = {
  as?: React.ElementType<any>;
  variant?: keyof typeof variants;
  inline?: boolean;
};

export type Props = React.HTMLAttributes<HTMLDivElement> &
  GridProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/grid
 */
const GridPrimitive = forwardRef<HTMLDivElement, Props>(
  ({ children, as, variant, gap, inline, sx, ...props }, ref) => (
    <Grid
      {...props}
      ref={ref}
      as={as}
      variant={variant}
      sx={{
        display: inline && "inline-grid",
        gap,
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
);

GridPrimitive.displayName = "Grid";

export default GridPrimitive;
