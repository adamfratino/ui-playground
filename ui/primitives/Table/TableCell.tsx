import { Box, Text } from "~ui/primitives";

type Props = {
  type?: "head" | "body";
  children?: React.ReactNode;
};

const TableCell: React.FC<Props> = ({ type = "body", children }) => {
  const element = type === "head" ? "th" : "td";
  const fontWeight = type === "head" ? 600 : 500;

  return (
    <Box as={element} display="flex" alignItems="center">
      <Text variant="label" fontWeight={fontWeight}>
        {children}
      </Text>
    </Box>
  );
};

export default TableCell;
