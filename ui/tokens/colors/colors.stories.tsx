import { Meta, Story } from "@storybook/react";
import { Box } from "~ui/primitives/layout/Box";
import { Text } from "~ui/primitives/typography/Text";
import { reds, oranges, yellows, greens, blues, purples } from "./";
import type { ColorsType } from "./types";

export default {
  title: "Tokens/Colors",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
} as Meta;

const ColorGrid: React.FC<{ spectrum: ColorsType }> = ({ spectrum }) => (
  <Box display="flex" alignItems="stretch" height="100vh">
    {Object.entries(spectrum).map((color, i) => (
      <Box key={i} backgroundColor={color[1]} padding="thick" flex={1}>
        <Text mb={1}>{color[0]}</Text>
        <Text>{color[1]}</Text>
      </Box>
    ))}
  </Box>
);

export const Red: Story = () => <ColorGrid spectrum={reds} />;
export const Orange: Story = () => <ColorGrid spectrum={oranges} />;
export const Yellow: Story = () => <ColorGrid spectrum={yellows} />;
export const Green: Story = () => <ColorGrid spectrum={greens} />;
export const Blue: Story = () => <ColorGrid spectrum={blues} />;
export const Purple: Story = () => <ColorGrid spectrum={purples} />;
