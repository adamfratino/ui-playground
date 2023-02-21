import { forwardRef } from "react";
import styled, { CSSProperties } from "styled-components";
import { color, grid, layout, space, variant } from "styled-system";
import type {
  ColorProps,
  GridProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";
import coreVariants from "./variants";

type StyledProps = ColorProps &
  GridProps &
  LayoutProps &
  SpaceProps & {
    variants?: {};
  };

export type Props = StyledProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: any;
  gap?: CSSProperties["gap"];
};

const Grid = forwardRef<HTMLDivElement, Props>(
  ({ as, children, variants, variant, gap, ...props }, ref) => (
    <StyledGrid
      gridGap={gap}
      variants={variants}
      variant={variant}
      as={as}
      ref={ref}
      {...props}
    >
      {children}
    </StyledGrid>
  )
);
Grid.displayName = "Grid";

const StyledGrid = styled.div<StyledProps>`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  ${({ variants }) =>
    variant({ variants: { ...coreVariants, ...(variants && variants) } })}
  ${color}
  ${grid}
  ${layout}
  ${space}
`;

export default Grid;
