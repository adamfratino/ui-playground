import { forwardRef, ElementType, HTMLAttributes } from "react";
import { Box, BoxProps } from "theme-ui";
import { StyleProps } from "./styles";
import variants from "./variants";

type OtherProps = {
  as?: ElementType<any>;
  variant?: keyof typeof variants;
};

export type Props = HTMLAttributes<HTMLElement> &
  BoxProps &
  StyleProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/box
 * @todo figure out why making this an FC errors children as IntrinsicAttribute
 * */
const BoxPrimitive = forwardRef<HTMLElement, Props>(
  (
    { children, as, variant, sx, boxShadow, display, height, width, ...props },
    ref
  ) => (
    <Box
      {...props}
      ref={ref}
      as={as}
      variant={variant}
      sx={{
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
