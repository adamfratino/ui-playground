import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import styled, { CSSProperties } from "styled-components";
import { color, space, shadow, typography, variant } from "styled-system";
import type {
  ColorProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import coreVariants from "./variants";

type StyledProps = ColorProps &
  ShadowProps &
  SpaceProps &
  TypographyProps & {
    variants?: {};
    textTransform?: CSSProperties["textTransform"];
  };

/**
 * @todo make `as` prop required?
 * @todo figure out how to make react markdown wrapper a fragment (instead of `h1`)
 * */
export type Props = StyledProps & {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: keyof typeof coreVariants | {};
  markdown?: boolean;
};

const Text = forwardRef<HTMLElement, Props>(
  ({ as = "p", variant, variants, markdown, children, ...props }, ref) => (
    <StyledText
      as={as}
      variants={variants}
      variant={variant}
      ref={ref}
      {...props}
    >
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
  ${({ variants }) =>
    variant({ variants: { ...coreVariants, ...(variants && variants) } })}
  ${color}
  ${shadow}
  ${space}
  ${typography}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform}`};

  strong,
  b {
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
