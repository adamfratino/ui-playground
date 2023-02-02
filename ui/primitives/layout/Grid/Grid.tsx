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
    <StyledGrid gridGap={gap} variant={variant} as={as} ref={ref} {...props}>
      {children}
    </StyledGrid>
  )
);
Grid.displayName = "Grid";

const StyledGrid = styled.div<StyledProps>`
display: grid;
grid-auto-columns: minmax(0, 1fr);
grid-auto-flow: column;
${variant({ variants: variants })}}
${grid}
${layout}
${space}
`;

export default Grid;
