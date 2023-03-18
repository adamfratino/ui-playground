import { forwardRef } from "react";
import { Button, ButtonProps } from "theme-ui";
import styles from "./styles";
import variants from "./variants";

export type Props = ButtonProps & {
  variant?: keyof typeof variants;
} & React.HTMLAttributes<HTMLButtonElement>;

/**
 * @see https://theme-ui.com/components/button
 * @todo find best way to add default styles that still take theme and overridden by variants?
 * @example buttonRadius as `0` by default, but allow `16px` in `reset` variant
 */
const ButtonPrimitive = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", sx, ...props }, ref) => (
    <Button {...props} ref={ref} variant={variant} sx={{ ...styles, ...sx }}>
      {children}
    </Button>
  )
);

ButtonPrimitive.displayName = "Button";

export default ButtonPrimitive;
