import React from "react";
import { breakpoints, colors, space } from "~ui/tokens";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";
import { Introduction } from "~ui/storybook";

const BreakpointsGrid: React.FC = () => (
  <Box variant="outer" backgroundColor="background.light">
    <Introduction
      title="Breakpoints"
      description="Breakpoints are the foundation of **responsive design.** Always consider the **different requirements** elements like visual heirarchy, page performance and accessibility might need **across devices**."
    />
    <Box>
      {breakpoints.map((breakpoint: string, i: number) => (
        <Box
          backgroundColor={Object.values(colors.greens)[i] as string}
          boxShadow="box.shallow"
          flex={1}
          padding="thick"
          width={breakpoint}
          maxWidth="100%"
          mb="thick"
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
  </Box>
);

export default BreakpointsGrid;
