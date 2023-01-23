import { Meta, Story } from "@storybook/react";
import { Box } from "./Box";

export default {
  title: "Primitives/Box",
  parameters: { layout: "fullscreen" },
  args: {
    width: 300,
    height: 300,
  },
} as Meta;

const Template: Story = (args) => <Box {...args} />;

export const ResponsiveBackgroundColor = Template.bind({});
ResponsiveBackgroundColor.args = {
  backgroundColor: {
    default: "black",
    sm: "blue",
    md: "green",
    lg: "red",
  },
};
