import React from "react";
import { Text } from "~ui/primitives/typography";
import { Box } from "~ui/primitives/layout";
import type { ColorsType } from "~ui/tokens/colors/colors.types";

const ColorsGrid: React.FC<{ spectrum: ColorsType }> = ({ spectrum }) => (
  <Box display="flex" alignItems="stretch" height="100vh">
    {Object.entries(spectrum).map((color, i) => (
      <Box
        key={i}
        backgroundColor={color[1]}
        padding="thick"
        flex={1}
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      >
        <Box
          backgroundColor="rgba(0,0,0,0.4)"
          borderRadius={4}
          boxShadow="rgba(0, 0, 0, 0.95) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset"
          color="white"
          padding={3}
        >
          <Text variant="label" mb={2} textShadow="1px 1px 1px black">
            {color[0]}
          </Text>
          <Text variant="label" textShadow="1px 1px 1px black">
            {(color[1] as string).toUpperCase()}
          </Text>
        </Box>
      </Box>
    ))}
  </Box>
);

export default ColorsGrid;
