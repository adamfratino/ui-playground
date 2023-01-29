import { forwardRef } from "react";
import styled, { CSSProperties } from "styled-components";
import { grid, layout, space, variant } from "styled-system";
import type { GridProps, LayoutProps, SpaceProps } from "styled-system";
import variants from "./variants";

type StyledProps = GridProps & LayoutProps & SpaceProps;

export type Props = StyledProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  gap?: CSSProperties["gap"];
};

const Grid = forwardRef<HTMLDivElement, Props>(
  ({ as, children, variant, gap, ...props }, ref) => (
    <StyledGrid
      display="grid"
      gridAutoColumns="minmax(0, 1fr)"
      gridAutoFlow="column"
      gridGap={gap}
      as={as}
      variant={variant}
      ref={ref}
      {...props}
    >
      {children}
    </StyledGrid>
  )
);
Grid.displayName = "Grid";

const StyledGrid = styled.div<StyledProps>`
  ${grid}
  ${layout}
  ${space}
  ${variant({ variants: variants })}}
`;

export default Grid;
