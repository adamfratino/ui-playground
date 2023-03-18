import { Meta, Story } from "@storybook/react";
import BoxPrimitive from "./Box";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  argTypes: {
    variant: { control: { type: "select", options: Object.keys(variants) } },
    trimEdges: { control: { type: "boolean" } },
    isCentered: { control: { type: "boolean" } },
  },
  args: {
    backgroundColor: "brand.primary",
    boxShadow: "box.shallow",
    width: 300,
    height: 300,
  },
} as Meta;

export const Box: Story = (args) => (
  <BoxPrimitive {...args}>
    <BoxPrimitive p={4}>lorem ipsum</BoxPrimitive>
  </BoxPrimitive>
);
