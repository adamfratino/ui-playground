import { Meta, Story } from "@storybook/react";
import { baseFontSize } from "./typography";

export default {
  title: "Tokens/Typography",
  parameters: { layout: "fullscreen" },
} as Meta;

export const Details: Story = () => <span>baseFontSize: {baseFontSize}</span>;
