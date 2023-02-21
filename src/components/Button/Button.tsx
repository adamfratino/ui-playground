import { flattenVariant } from "~ui/helpers";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";
import variants from "./variants";

type Props = {
  variant: {};
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
