import { Meta } from "@storybook/react";
import React from "react";
import { colors } from "~ui/tokens";
import breakpoints from "./breakpoints";
import { Box, Text } from "~ui/primitives";
import { Introduction } from "~storybook/components";
import { tokens } from "~storybook/configs/parameters";

export default {
  title: "UI/Tokens/Breakpoints",
  parameters: { ...tokens },
} as Meta;

export const Breakpoints: React.FC = () => (
  <Box variant="outer">
    <Introduction
      title="Breakpoints"
      description="Breakpoints are the foundation of **responsive design.** Always consider the **different requirements** elements like visual heirarchy, page performance and accessibility might need **across devices**."
    />
    <div>
      {breakpoints.map((breakpoint: any, i: number) => (
        <Text as="span" key={i}>
          {breakpoint}
        </Text>
      ))}
    </div>
  </Box>
);
