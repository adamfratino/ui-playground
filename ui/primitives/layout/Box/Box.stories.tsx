import { Meta, Story } from "@storybook/react";
import Box, { Props } from "./Box";

export default {
  title: "Primitives/Layout/Box",
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<Props> = (args) => <Box {...args} />;
