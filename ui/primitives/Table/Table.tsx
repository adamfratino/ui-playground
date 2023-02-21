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
    width?: CSSProperties["width"];
  };

export type Props = StyledProps & {
  children?: React.ReactNode;
  variant?: {};
};

const Table = forwardRef<HTMLTableElement, Props>(
  ({ children, variants, ...props }, ref) => (
    <StyledTable as="table" variants={variants} ref={ref} {...props}>
      {children}
    </StyledTable>
  )
);
Table.displayName = "Table";

export default Table;

const StyledTable = styled(Box)<StyledProps>`
  ${layout}
  ${shadow}
  ${({ variants }) =>
    variant({ variants: { ...coreVariants, ...(variants && variants) } })}
  border-collapse: collapse;
  border-spacing: 0;
`;
