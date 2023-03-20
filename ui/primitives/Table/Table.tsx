import { forwardRef, CSSProperties } from "react";
import styled from "@emotion/styled";
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
    variant?: keyof typeof coreVariants | {};
    width?: CSSProperties["width"];
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
`;
