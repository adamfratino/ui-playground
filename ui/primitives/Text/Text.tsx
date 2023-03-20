import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import { Text, TextProps } from "theme-ui";
import styles, { StyleProps } from "./styles";
import variants from "./variants";

type OtherProps = {
  as: React.ElementType<any>;
  variant?: keyof typeof variants;
  isMarkdown?: boolean;
};

export type Props = React.HTMLAttributes<HTMLElement> &
  TextProps &
  StyleProps &
  OtherProps;

/**
 * @see https://theme-ui.com/components/text
 * @todo get rid of react-markdown and figure out mdx
 */
const TextPrimitive = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      as = undefined,
      variant = "paragraph",
      sx,
      isMarkdown,
      color,
      fontFamily,
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
        color,
        fontFamily,
        fontSize,
        fontWeight,
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
