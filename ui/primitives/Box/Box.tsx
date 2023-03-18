import { forwardRef } from "react";
import { Box, BoxProps } from "theme-ui";
import { isCentered, trimEdges, StyleProps } from "./styles";
import variants from "./variants";

type OtherProps = {
  as?: React.ElementType<any>;
  variant?: keyof typeof variants;
};

export type Props = React.HTMLAttributes<HTMLElement> &
  BoxProps &
  StyleProps &
  OtherProps;

/** @todo figure out why making this an FC errors children */
const BoxPrimitive = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      as,
      variant = undefined,
      sx,
      boxShadow,
      display,
      height,
      width,
      ...props
    },
    ref
  ) => (
    <Box
      {...props}
      ref={ref}
      as={as}
      variant={variant}
      sx={{
        isCentered,
        trimEdges,
        boxShadow,
        display,
        height,
        width,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
);

BoxPrimitive.displayName = "Box";

export default BoxPrimitive;
