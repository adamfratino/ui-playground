import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import ButtonPrimitive from "./Button";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  argTypes: {
    variant: { control: { type: "select", options: Object.keys(variants) } },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: action("clicked"),
  },
} as Meta;

export const Button: Story = (args) => (
  <ButtonPrimitive {...args}>{args.variant}</ButtonPrimitive>
);
