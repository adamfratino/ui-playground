import { forwardRef } from "react";
import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
  typography,
  compose,
  variant,
} from "styled-system";
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import variants from "./variants";

type StyledProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  ShadowProps &
  TypographyProps;

export type Props = StyledProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

const Box = forwardRef<HTMLDivElement, Props>(
  ({ as, children, variant, ...props }, ref) => (
    <StyledBox as={as} variant={variant} ref={ref} {...props}>
      {children}
    </StyledBox>
  )
);
Box.displayName = "Box";

const StyledBox = styled.div<StyledProps>(
  compose(
    border,
    color,
    flexbox,
    layout,
    shadow,
    space,
    typography,
    variant({ variants: variants })
  )
);

export default Box;
