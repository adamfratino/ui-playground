import { forwardRef } from "react";
import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  shadow,
  space,
  typography,
  variant,
} from "styled-system";
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import coreVariants from "./variants";

type StyledProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  SpaceProps &
  ShadowProps &
  TypographyProps & {
    variants?: {};
    trimEdges?: boolean;
    centered?: boolean;
  };

export type Props = StyledProps & {
  as?: React.ElementType;
  children?: React.ReactNode;
  /** @todo how do we get autocomplete? */
  variant?: any;
};

const Box = forwardRef<HTMLDivElement, Props>(
  ({ as, children, variants, variant, trimEdges, centered, ...props }, ref) => (
    <StyledBox
      as={as}
      variants={variants}
      variant={variant}
      trimEdges={trimEdges}
      centered={centered}
      ref={ref}
      {...props}
    >
      {children}
    </StyledBox>
  )
);
Box.displayName = "Box";

const StyledBox = styled.div<StyledProps>`
  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${shadow}
  ${space}
  ${typography}
  ${({ variants }) =>
    variant({ variants: { ...coreVariants, ...(variants && variants) } })}

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

  ${({ centered }) =>
    centered &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export default Box;
