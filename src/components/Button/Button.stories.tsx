import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button, { NewButton } from "./Button";
import { variantArgTypes } from "~storybook/configs";
import variants from "./variants";

export default {
  title: "App/Components",
  component: Button,
  argTypes: {
    ...variantArgTypes(variants),
  },
  args: {
    onClick: action("clicked"),
  },
} as Meta;

export const Default: Story = (args) => (
  <Button variant="primary" {...args}>
    Button
  </Button>
);
Default.storyName = "Button";

export const Test: Story = () => <NewButton />;
