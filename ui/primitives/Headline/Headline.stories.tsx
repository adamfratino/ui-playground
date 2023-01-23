import { Meta, Story } from "@storybook/react";
import Headline, { Props } from "./Headline";

export default {
  title: "Primitives/Headline",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Headline {...args}>This is a headline</Headline>
);

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
  variant: "primary",
};

export const ResponsiveColor = Template.bind({});
ResponsiveColor.args = {
  color: {
    default: "black",
    sm: "blue",
    md: "green",
    lg: "red",
  },
};
