import { forwardRef } from "react";
import { Container, ContainerProps } from "theme-ui";

type OtherProps = {
  as?: React.ElementType<any>;
  // variant?: keyof typeof variants;
};

export type Props = React.HTMLAttributes<HTMLDivElement> &
  ContainerProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/container
 */
const ContainerPrimitive = forwardRef<HTMLDivElement, Props>(
  ({ children, as, variant, sx, ...props }, ref) => (
    <Container {...props} ref={ref} as={as} variant={variant} sx={sx}>
      {children}
    </Container>
  )
);

ContainerPrimitive.displayName = "Container";

export default ContainerPrimitive;
