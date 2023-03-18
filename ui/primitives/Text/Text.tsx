import { forwardRef, CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
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
 * @see https://www.npmjs.com/package/markdown-to-jsx
 * */
export type Props = StyledProps & {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: keyof typeof coreVariants | {};
  markdown?: boolean;
};

const markdownComponents = {
  p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  fragment: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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
        /**
         * if we don't explicitly undefine `className` we get a container `div`
         * @see https://stackoverflow.com/a/74039428/2868869
         * */
        <ReactMarkdown className={undefined}>
          {children as string}
        </ReactMarkdown>
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
