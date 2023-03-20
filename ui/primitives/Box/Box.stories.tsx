import { Meta, Story } from "@storybook/react";
import BoxPrimitive from "./Box";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  argTypes: {
    variant: { control: { type: "select", options: Object.keys(variants) } },
  },
  args: {
    backgroundColor: "gold",
    width: 300,
    height: 300,
  },
} as Meta;

export const Box: Story = (args) => (
  <BoxPrimitive {...args}>
    <BoxPrimitive />
  </BoxPrimitive>
);
