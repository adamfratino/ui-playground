import { forwardRef } from "react";
import { Grid, GridProps } from "theme-ui";
import { baseStyles, StyleProps } from "./styles";
import variants from "./variants";

type OtherProps = {
  as?: React.ElementType<any>;
  variant?: keyof typeof variants;
};

export type Props = React.HTMLAttributes<HTMLDivElement> &
  GridProps &
  StyleProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/grid
 */
const GridPrimitive = forwardRef<HTMLDivElement, Props>(
  ({ children, as, variant, inline, gap, sx, ...props }, ref) => (
    <Grid
      {...props}
      ref={ref}
      as={as}
      variant={variant}
      sx={{
        ...baseStyles,
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
