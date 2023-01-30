import React from "react";
import { breakpoints, colors } from "~ui/tokens";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";

const BreakpointsGrid: React.FC = () => (
  <Box variant="outer" p={0} backgroundColor="backgroundColor.light">
    {breakpoints.map((breakpoint: string, i: number) => (
      <Box
        backgroundColor={Object.values(colors.greens)[i] as string}
        boxShadow="rgba(0, 0, 0, 0.48) 6px 2px 16px 0px, rgba(0, 0, 0, 0.8) -6px -2px 16px 0px"
        flex={1}
        padding="thick"
        width={breakpoint}
        maxWidth="100%"
        key={i}
      >
        <Box variant="insetShadow">
          <Text variant="label" textShadow="1px 1px 1px black">
            {breakpoint}
          </Text>
        </Box>
      </Box>
    ))}
  </Box>
);

export default BreakpointsGrid;
