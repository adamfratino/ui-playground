import { flattenVariant } from "~ui/helpers";
import { Box, Text } from "~ui/primitives";
import variants from "./variants";

type Props = {
  variant: keyof typeof variants;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ variant, onClick, children }) => (
  <Box
    as="button"
    variants={flattenVariant(variants, "box")}
    variant={variant}
    onClick={onClick}
  >
    <Text variants={flattenVariant(variants, "text")} variant={variant}>
      {children}
    </Text>
  </Box>
);

export default Button;
