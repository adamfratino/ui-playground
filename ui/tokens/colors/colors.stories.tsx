import { Meta, Story } from "@storybook/react";
import { Box } from "~ui/primitives/layout/Box";
import { Text } from "~ui/primitives/typography/Text";
import { red, orange, yellow, green, blue, purple } from "./";
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

export const Red: Story = () => <ColorGrid spectrum={red} />;
export const Orange: Story = () => <ColorGrid spectrum={orange} />;
export const Yellow: Story = () => <ColorGrid spectrum={yellow} />;
export const Green: Story = () => <ColorGrid spectrum={green} />;
export const Blue: Story = () => <ColorGrid spectrum={blue} />;
export const Purple: Story = () => <ColorGrid spectrum={purple} />;
