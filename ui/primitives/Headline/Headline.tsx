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
import { themes } from "./themes";

type StyledProps = ColorProps & SpaceProps & TypographyProps;

export type Props = StyledProps & {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: keyof typeof themes;
};

const Headline: React.FC<Props> = ({ as, children, variant, ...props }) => (
  <StyledHeadline as={as} variant={variant} {...props}>
    {children}
  </StyledHeadline>
);

export default Headline;

const StyledHeadline = styled.h1<StyledProps>(
  color,
  space,
  typography,
  variant({
    scale: "headlines",
    variants: { ...themes },
  })
);
