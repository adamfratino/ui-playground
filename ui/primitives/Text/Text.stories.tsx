import { Meta, Story } from "@storybook/react";
import TextPrimitive from "./Text";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  argTypes: {
    variant: { control: { type: "select", options: Object.keys(variants) } },
  },
  args: {
    variant: "paragraph",
  },
} as Meta;

export const Text: Story = (args) => (
  <TextPrimitive as={args.as || "p"} {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nobis
    accusantium, voluptates perspiciatis facilis explicabo dolor nam possimus
    atque sunt ad odit, quidem temporibus, rem aspernatur facere! Quasi, natus
    culpa.
  </TextPrimitive>
);
