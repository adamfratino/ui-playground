import { Meta } from "@storybook/react";
import React from "react";
import { colors } from "~ui/tokens";
import { breakpointsWithKeys } from "./breakpoints";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";
import { Introduction } from "~storybook/components";
import { tokens } from "~storybook/configs/parameters";

export default {
  title: "UI/Tokens/Breakpoints",
  parameters: { ...tokens },
} as Meta;

export const Breakpoints: React.FC = () => (
  <Box variant="outer" backgroundColor="background.light">
    <Introduction
      title="Breakpoints"
      description="Breakpoints are the foundation of **responsive design.** Always consider the **different requirements** elements like visual heirarchy, page performance and accessibility might need **across devices**."
    />
    <div>
      {Object.entries(breakpointsWithKeys).map((breakpoint: any, i: number) => (
        <Box
          backgroundColor={Object.values(colors.greens)[i] as string}
          boxShadow="box.shallow"
          display="flex"
          flex={1}
          justifyContent="space-between"
          padding="thick"
          width={breakpoint}
          maxWidth="100%"
          mb="thick"
          key={i}
        >
          <Label>{breakpoint[0]}</Label>
          <Label>{breakpoint[1]}</Label>
        </Box>
      ))}
    </div>
  </Box>
);

const Label: React.FC<{ children: string }> = ({ children }) => (
  <Box variant="insetShadow" minWidth="60px" textAlign="center">
    <Text variant="label" textShadow="1px 1px 1px black" fontSize={5}>
      {children}
    </Text>
  </Box>
);
