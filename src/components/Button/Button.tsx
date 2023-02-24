import { CSSProperties } from "styled-components";
import { flattenVariant } from "~ui/helpers";
import { Box, Text } from "~ui/primitives";
import variants from "./variants";

/** @todo convert to ui primitive with styled system, etc. */
type StyledProps = {
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
  border?: CSSProperties["border"];
  width?: CSSProperties["width"];
};

type Props = StyledProps & {
  variant?: keyof typeof variants;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({
  variant,
  onClick,
  children,
  backgroundColor,
  color,
  fontSize,
  border,
  width,
}) => (
  <Box
    variants={flattenVariant(variants, "box")}
    variant={variant}
    as="button"
    onClick={onClick}
    backgroundColor={backgroundColor}
    border={border}
    width={width}
  >
    <Text
      as="span"
      variants={flattenVariant(variants, "text")}
      variant={variant}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </Text>
  </Box>
);

export default Button;
