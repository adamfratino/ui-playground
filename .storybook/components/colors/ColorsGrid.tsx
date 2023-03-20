import React from "react";
import { Box, Grid, Text } from "../../../ui/primitives";

const ColorGrid: React.FC<{ colors: {} }> = ({ colors }) => (
  <Grid variant="auto">
    {Object.entries(colors).map((color, i) => (
      <Box key={i} p={5} height={200} bg={color[1] as string}>
        <Text as="span" variant="label"></Text>
      </Box>
    ))}
  </Grid>
);

export default ColorGrid;
