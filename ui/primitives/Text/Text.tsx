import React from "react";
import styled from "styled-components";
import { color, space, typography, variant } from "styled-system";
import type { ColorProps, SpaceProps, TypographyProps } from "styled-system";
import variants from "./variants";

type StyledProps = ColorProps & SpaceProps & TypographyProps;

export type Props = StyledProps & {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: keyof typeof variants;
};

const Text: React.FC<Props> = ({ as, variant, children, ...props }) => (
  <StyledText as={as} variant={variant} {...props}>
    {children}
  </StyledText>
);

export default Text;

const StyledText = styled.h1<StyledProps>(
  color,
  space,
  typography,
  variant({ variants: variants })
);
