import { Meta, Story } from "@storybook/react";
import BoxComponent, { Props } from "./Box";
import { themeTypes } from "~ui/storybook";

export default {
  title: "Primitives/Layout",
  component: BoxComponent,
  argTypes: { ...themeTypes },
  args: {
    backgroundColor: "text.body.light",
    boxShadow: "box.shallow",
    width: 300,
    height: 300,
  },
} as Meta;

const Template: Story<Props> = (args) => <BoxComponent {...args} />;

export const Box = Template.bind({});
