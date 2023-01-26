import { forwardRef } from "react";
import styled from "styled-components";
import {
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
} from "styled-system";
import type {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import variants from "./variants";

type StyledProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
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
  color,
  flexbox,
  layout,
  space,
  typography,
  variant({ variants: variants })
);

export default Box;
