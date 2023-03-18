import { forwardRef } from "react";
import { Button as ThemeUiButton, ButtonProps } from "theme-ui";

/**
 * @see https://theme-ui.com/components/button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <ThemeUiButton ref={ref} {...props}>
      {children}
    </ThemeUiButton>
  )
);

Button.displayName = "Button";

export default Button;
