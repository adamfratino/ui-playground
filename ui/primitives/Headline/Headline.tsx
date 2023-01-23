import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  typography,
  variant,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import { toBreakpointsArray } from "~ui/helpers";

const variants = {
  primary: {
    color: toBreakpointsArray({
      sm: "gold",
      lg: "tomato",
    }),
    fontSize: toBreakpointsArray({
      sm: 64,
      md: 100,
    }),
  },
  secondary: {
    color: "gold",
  },
};

type StyledProps = ColorProps & SpaceProps & TypographyProps;

export type Props = StyledProps & {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: "primary";
};

const Headline: React.FC<Props> = ({ as, variant, children, ...props }) => (
  <StyledHeadline as={as} variant={variant} {...props}>
    {children}
  </StyledHeadline>
);

export default Headline;

const StyledHeadline = styled.h1<StyledProps>(
  color,
  space,
  typography,
  variant({ variants: variants })
);
