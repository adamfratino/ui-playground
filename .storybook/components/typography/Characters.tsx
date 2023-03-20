import React from "react";
import { Box, Text } from "../../../ui/primitives";

const Characters: React.FC<{ font: string; chars: string[] }> = ({
  font,
  chars,
}) => (
  <>
    {chars.map((char, i) => (
      <Box key={i}>
        <Text
          as="span"
          sx={{
            fontFamily: font,
            fontSize: "44px",
            fontWeight: "bold",
          }}
        >
          {char}
        </Text>
      </Box>
    ))}
  </>
);

export default Characters;
