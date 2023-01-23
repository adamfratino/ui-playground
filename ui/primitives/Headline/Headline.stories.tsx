import { Meta, Story } from "@storybook/react";
import HeadlinePrimitive, { Props } from "./Headline";
import { themes } from "./themes";

export default {
  title: "Primitives/Headline",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(themes),
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <HeadlinePrimitive {...args}>This is a headline</HeadlinePrimitive>
);

export const Variant = Template.bind({});
Variant.args = {
  variant: "sm",
};
