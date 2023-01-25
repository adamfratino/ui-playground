import { Meta, Story } from "@storybook/react";
import Box, { Props } from "./Box";

export default {
  title: "Primitives/Layout/Box",
  parameters: { layout: "fullscreen" },
  args: {
    width: 300,
    height: 300,
  },
} as Meta;

const Template: Story<Props> = (args) => <Box {...args} />;

export const ResponsivePropsObject = Template.bind({});
ResponsivePropsObject.args = {
  backgroundColor: {
    default: "black",
    sm: "blue",
    md: "green",
    lg: "red",
  },
};

export const ResponsivePropsArray = Template.bind({});
ResponsivePropsArray.args = {
  backgroundColor: ["black", "blue", "green", "red"],
};
