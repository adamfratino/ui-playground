import { CSSProperties } from "react";
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
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      width="100%"
      isCentered={centered}
      sx={{
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default TableCell;
