import { Meta, Story } from "@storybook/react";
import Box, { Props } from "./Box";

export default {
  title: "Primitives/Layout/Box",
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<Props> = (args) => <Box {...args} />;

export const ResponsivePropsObject = Template.bind({});
ResponsivePropsObject.args = {
  width: 300,
  height: 300,
  backgroundColor: {
    default: "black",
    sm: "blue",
    md: "green",
    lg: "red",
  },
};

export const ResponsivePropsArray = Template.bind({});
ResponsivePropsArray.args = {
  ...ResponsivePropsObject.args,
  backgroundColor: ["black", "blue", "green", "red"],
};

export const Section = () => <Box variant="section">Section</Box>;
