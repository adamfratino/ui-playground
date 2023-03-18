import { forwardRef, CSSProperties } from "react";
import styled from "@emotion/styled";
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
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
  PositionProps,
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
  PositionProps &
  SpaceProps &
  ShadowProps &
  TypographyProps & {
    variants?: {};
    trimEdges?: boolean;
    centered?: boolean;
    filter?: CSSProperties["filter"];
    pointerEvents?: CSSProperties["pointerEvents"];
    cursor?: CSSProperties["cursor"];
    as?: React.ElementType;
  };

export type Props = StyledProps & {
  id?: string;
  children?: React.ReactNode;
  variant?: keyof typeof coreVariants | {};
  onClick?: () => void;
};

const Box = forwardRef<HTMLElement, Props>(
  (
    {
      id,
      as,
      children,
      filter,
      variants,
      variant,
      trimEdges,
      cursor,
      pointerEvents,
      centered,
      onClick,
      ...props
    },
    ref
  ) => (
    <StyledBox
      id={id}
      as={as}
      variants={variants}
      variant={variant}
      trimEdges={trimEdges}
      centered={centered}
      filter={filter}
      pointerEvents={pointerEvents}
      cursor={cursor}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {children}
    </StyledBox>
  )
);
Box.displayName = "Box";

const StyledBox = styled.div<StyledProps>`
  ${({ as }) =>
    as === "button" &&
    `
    border: none;
    appearance: none;
    cursor: pointer;
  `}
  ${({ filter }) => filter && `filter: ${filter}`};
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ pointerEvents }) => pointerEvents && `pointer-events: ${pointerEvents}`};

  ${({ variants }) =>
    variant({ variants: { ...coreVariants, ...(variants && variants) } })}

  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
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

  ${({ centered }) =>
    centered &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export default Box;
