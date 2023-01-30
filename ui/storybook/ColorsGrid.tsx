import React from "react";
import { Text } from "~ui/primitives/typography";
import { Box } from "~ui/primitives/layout";

const ColorsGrid: React.FC<{ spectrum: {} }> = ({ spectrum }) => (
  <Box display="flex" alignItems="stretch" height="100vh">
    {Object.entries(spectrum).map((color, i) => (
      <Box
        backgroundColor={color[1] as string}
        boxShadow="box.overlapping"
        flex={1}
        key={i}
        padding="thick"
      >
        <Box variant="insetShadow">
          <Label mb={2}>{color[0]}</Label>
          <Label>{(color[1] as string).toUpperCase()}</Label>
        </Box>
      </Box>
    ))}
  </Box>
);

export default ColorsGrid;

const Label: React.FC<{ children: React.ReactNode; mb?: number }> = ({
  children,
  mb,
}) => (
  <Text variant="label" textShadow="text.dark" mb={mb}>
    {children}
  </Text>
);
