import { forwardRef, CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import { Text, TextProps } from "theme-ui";
import styles from "./styles";
import variants from "./variants";

type CssProps = {
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
};

type OtherProps = {
  as: React.ElementType<any>;
  variant?: keyof typeof variants;
  isMarkdown?: boolean;
};

export type Props = React.HTMLAttributes<HTMLElement> &
  TextProps &
  CssProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/text
 * @todo get rid of react-markdown and figure out mdx
 */
const TextPrimitive = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      as,
      variant = "paragraph",
      sx,
      isMarkdown,
      color,
      fontSize,
      fontWeight,
      ...props
    },
    ref
  ) => (
    <Text
      {...props}
      ref={ref}
      as={as}
      variant={variant}
      sx={{
        ...styles,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        ...sx,
      }}
    >
      {isMarkdown ? (
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
    </Text>
  )
);

TextPrimitive.displayName = "Text";

export default TextPrimitive;
