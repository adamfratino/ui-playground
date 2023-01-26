import { Meta } from "@storybook/react";
import { Box } from "~ui/primitives/layout/Box";
import { Text } from "~ui/primitives/typography/Text";
import breakpoints from "./breakpoints";
import { green } from "~ui/tokens/colors";

export default {
  title: "Tokens",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
} as Meta;

export const Breakpoints: React.FC = () => (
  <Box variant="columns" height="100vh" backgroundColor="backgroundColor.light">
    {breakpoints.map((breakpoint, i) => (
      <Box
        backgroundColor={Object.values(green)[i] as string}
        boxShadow="rgba(0, 0, 0, 0.48) 6px 2px 16px 0px, rgba(0, 0, 0, 0.8) -6px -2px 16px 0px"
        flex={1}
        borderTopRightRadius={8}
        padding="thick"
        width={breakpoint}
        maxWidth="100%"
        key={i}
      >
        <Box
          backgroundColor="rgba(0,0,0,0.4)"
          borderRadius={4}
          boxShadow="rgba(0, 0, 0, 0.95) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset"
          color="white"
          padding={3}
          display="inline-block"
        >
          <Text variant="label" textShadow="1px 1px 1px black">
            {breakpoint}
          </Text>
        </Box>
      </Box>
    ))}
  </Box>
);
