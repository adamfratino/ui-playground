import { Meta, Story } from "@storybook/react";
import HeadlinePrimitive, { Props } from "./Headline";
import { headlines } from "~ui/theme";

export default {
  title: "Primitives/Headline",
  parameters: {
    layout: "fullscreen",
  },
  // argTypes: {
  //   variant: {
  //     control: "select",
  //     options: Object.keys(headlines),
  //   },
  // },
} as Meta;

export const Default: Story<Props> = (args) => (
  <HeadlinePrimitive {...args}>This is a headline</HeadlinePrimitive>
);
