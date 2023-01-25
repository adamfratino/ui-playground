import styled from "styled-components";
import { color, flexbox, layout, space, typography } from "styled-system";
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

const Box: React.FC<Props> = ({ as, children, variant, ...props }) => (
  <StyledBox as={as} variant={variant} {...props}>
    {children}
  </StyledBox>
);

const StyledBox = styled.div<StyledProps>(
  color,
  flexbox,
  layout,
  space,
  typography
);

export default Box;
