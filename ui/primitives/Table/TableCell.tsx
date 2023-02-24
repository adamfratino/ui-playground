import { CSSProperties } from "styled-components";
import { Box } from "~ui/primitives";

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
  backgroundColor,
  centered,
  boxShadow,
}) => {
  const element = type === "head" ? "th" : "td";

  return (
    <Box
      as={element}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      centered={centered}
      width={1}
    >
      {children}
    </Box>
  );
};

export default TableCell;
