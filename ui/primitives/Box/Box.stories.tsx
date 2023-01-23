import { Meta, Story } from "@storybook/react";
import { Box as BoxPrimitive } from "./Box";

export default {
  title: "Primitives/Box",
  parameters: { layout: "fullscreen" },
  args: {
    width: 300,
    height: 300,
  },
} as Meta;

const Template: Story = (args) => <BoxPrimitive {...args} />;

export const Box = Template.bind({});
Box.args = {
  backgroundColor: {
    xs: "primary",
    md: "secondary",
    xl: "tertiary",
  },
};
