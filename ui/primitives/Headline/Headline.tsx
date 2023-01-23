import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

type StyledProps = ColorProps & SpaceProps & TypographyProps;

export type Props = StyledProps & {
  as?: React.ElementType;
  children: React.ReactNode;
};

const Headline: React.FC<Props> = ({ as, children, ...props }) => (
  <StyledHeadline as={as} {...props}>
    {children}
  </StyledHeadline>
);

export default Headline;

const StyledHeadline = styled.h1<StyledProps>(color, space, typography);
