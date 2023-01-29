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
  TypographyProps & {
    trimEdges?: boolean;
  };

export type Props = StyledProps & {
  as?: React.ElementType;
  children?: React.ReactNode;
  variant?: keyof typeof variants;
};

const Box = forwardRef<HTMLDivElement, Props>(
  ({ as, children, variant, trimEdges, ...props }, ref) => (
    <StyledBox
      as={as}
      variant={variant}
      trimEdges={trimEdges}
      ref={ref}
      {...props}
    >
      {children}
    </StyledBox>
  )
);
Box.displayName = "Box";

const StyledBox = styled.div<StyledProps>`
  ${variant({ variants: variants })}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${shadow}
  ${space}
  ${typography}

  ${({ trimEdges }) =>
    trimEdges &&
    `
    & > * {
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-left: 0 !important;

      &:first-child  {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
  
      &:last-child  {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
      }
    }
  `}
`;

export default Box;
