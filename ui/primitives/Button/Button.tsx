import { forwardRef } from "react";
import { Button, ButtonProps } from "theme-ui";
import variants from "./variants";

type Props = ButtonProps & {
  variant?: keyof typeof variants;
};

/**
 * @see https://theme-ui.com/components/button
 * @todo find best way to add default styles that still take theme
 */
const ButtonPrimitive = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, ...props }, ref) => (
    <Button ref={ref} variant={variant} {...props}>
      {children}
    </Button>
  )
);

ButtonPrimitive.displayName = "Button";

export default ButtonPrimitive;
