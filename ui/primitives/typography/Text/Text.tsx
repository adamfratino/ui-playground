import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {
  color,
  space,
  shadow,
  typography,
  compose,
  system,
  variant,
} from "styled-system";
import type {
  ColorProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import variants from "./variants";

type StyledProps = ColorProps & ShadowProps & SpaceProps & TypographyProps;

export type Props = StyledProps & {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: keyof typeof variants;
  markdown?: boolean;
};

const Text = forwardRef<HTMLElement, Props>(
  ({ as, variant, markdown, children, ...props }, ref) => (
    <StyledText as={as} variant={variant} ref={ref} {...props}>
      {markdown ? (
        <ReactMarkdown>{children as string}</ReactMarkdown>
      ) : (
        children
      )}
    </StyledText>
  )
);

Text.displayName = "Text";

export default Text;

const StyledText = styled.span<StyledProps>`
  display: block;

  ${variant({ variants: variants })}
  ${color}
  ${shadow}
  ${space}
  ${typography}
  ${system({
    textTransform: true,
  })}

  strong, b {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;
