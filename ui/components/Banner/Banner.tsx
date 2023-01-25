import styled from "styled-components";
import {
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
} from "styled-system";
import type {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import variants from "./variants";

type StyledProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export type Props = StyledProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

const Banner: React.FC<Props> = ({ as, children, variant, ...props }) => (
  <StyledBanner as={as} variant={variant} {...props}>
    {children}
  </StyledBanner>
);

const StyledBanner = styled.div<StyledProps>(
  color,
  flexbox,
  layout,
  space,
  typography,
  variant({ variants: variants })
);

export default Banner;
