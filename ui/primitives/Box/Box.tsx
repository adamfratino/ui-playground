import styled from "styled-components";
import {
  color,
  flexbox,
  layout,
  space,
  typography,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type BoxProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const Box = styled.div<BoxProps>(
  color,
  flexbox,
  layout,
  space,
  typography
);
