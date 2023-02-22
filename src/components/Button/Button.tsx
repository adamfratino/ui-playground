import { CSSProperties } from "styled-components";
import { flattenVariant } from "~ui/helpers";
import { Box, Text } from "~ui/primitives";
import variants from "./variants";

type StyledProps = {
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
};

type Props = StyledProps & {
  variant: keyof typeof variants;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({
  variant,
  onClick,
  children,
  backgroundColor,
  color,
}) => (
  <Box
    variants={flattenVariant(variants, "box")}
    variant={variant}
    as="button"
    onClick={onClick}
    backgroundColor={backgroundColor}
  >
    <Text
      variants={flattenVariant(variants, "text")}
      variant={variant}
      color={color}
    >
      {children}
    </Text>
  </Box>
);

export default Button;
