import { forwardRef } from "react";
import styled, { CSSProperties } from "styled-components";
import {
  layout,
  shadow,
  variant,
  LayoutProps,
  ShadowProps,
} from "styled-system";
import { Box } from "~ui/primitives";
import coreVariants from "./variants";

type StyledProps = Omit<LayoutProps, "width"> &
  ShadowProps & {
    variants?: {};
    variant?: {};
    width?: CSSProperties["width"];
    gridTemplateColumns?: CSSProperties["gridTemplateColumns"];
  };

export type Props = StyledProps & {
  children?: React.ReactNode;
};

const Table = forwardRef<HTMLTableElement, Props>(
  ({ children, variants, variant, ...props }, ref) => (
    <StyledTable
      as="table"
      variants={variants}
      variant={variant}
      ref={ref}
      {...props}
    >
      {children}
    </StyledTable>
  )
);
Table.displayName = "Table";

export default Table;

const StyledTable = styled(Box)<StyledProps>`
  ${({ variants }) =>
    variant({ variants: { ...coreVariants, ...(variants && variants) } })}
  ${layout}
  ${shadow}
  border-collapse: collapse;
  border-spacing: 0;

  ${({ gridTemplateColumns }) =>
    gridTemplateColumns &&
    `
    tr {
      grid-template-columns: ${gridTemplateColumns};
    }
  `}
`;
