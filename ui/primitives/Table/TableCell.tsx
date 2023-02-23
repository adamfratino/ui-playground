import { CSSProperties } from "styled-components";
import { Box, Text } from "~ui/primitives";

type Props = {
  type?: "head" | "body";
  textTransform?: CSSProperties["textTransform"];
  backgroundColor?: CSSProperties["backgroundColor"];
  boxShadow?: CSSProperties["boxShadow"];
  centered?: boolean;
  children?: React.ReactNode;
};

const TableCell: React.FC<Props> = ({
  type = "body",
  children,
  textTransform,
  backgroundColor,
  centered,
  boxShadow,
}) => {
  const element = type === "head" ? "th" : "td";
  const fontWeight = type === "head" ? 600 : 500;

  return (
    <Box
      as={element}
      display="flex"
      alignItems="center"
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      centered={centered}
    >
      <Text
        as="span"
        variant="label"
        fontWeight={fontWeight}
        textTransform={textTransform}
      >
        {children}
      </Text>
    </Box>
  );
};

export default TableCell;
