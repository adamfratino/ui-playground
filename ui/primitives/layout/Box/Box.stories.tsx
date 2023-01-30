import { Meta, Story } from "@storybook/react";
import Box, { Props } from "./Box";
import { themeTypes } from "~ui/storybook";

export default {
  title: "Primitives/Layout",
  argTypes: { ...themeTypes },
  args: {
    backgroundColor: "primary",
    boxShadow: "box.shallow",
    width: 300,
    height: 300,
  },
} as Meta;

const Template: Story<Props> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.storyName = "Box";
