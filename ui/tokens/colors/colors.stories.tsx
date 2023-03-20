import { Meta, Story } from "@storybook/react";
import { tokenParameters } from "~storybook/configs/parameters";
import { Box, Grid, Text } from "~ui/primitives";
import colors from "./";

export default {
  title: "UI/Tokens/Colors",
  parameters: { ...tokenParameters },
} as Meta;

console.log(colors.reds);

export const Colors: Story = () => <div>colors</div>;
