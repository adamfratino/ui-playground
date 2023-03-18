import { forwardRef } from "react";
import styled from "@emotion/styled";
import { height, margin, shadow, system, variant } from "styled-system";
import {
  BackgroundColorProps,
  HeightProps,
  MarginProps,
  ShadowProps,
} from "styled-system";
import variants from "./variants";

/** @see https://github.com/styled-system/styled-system/issues/1569 */
const backgroundColor = system({
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors",
  },
});

type StyledProps = BackgroundColorProps &
  HeightProps &
  MarginProps &
  ShadowProps;

export type Props = StyledProps & {
  /** @todo extend variants */
  variant?: keyof typeof variants;
};

const Line = forwardRef<HTMLHRElement, Props>(({ ...props }, ref) => (
  <StyledHr ref={ref} {...props} />
));
Line.displayName = "Line";

const StyledHr = styled.hr<StyledProps>`
  display: block;
  border: 0;
  width: 100%;
  ${variant({ variants: variants })}}
  ${system({ backgroundColor: true })}
  ${height}
  ${margin}
  ${backgroundColor}
  ${shadow}
`;

export default Line;
