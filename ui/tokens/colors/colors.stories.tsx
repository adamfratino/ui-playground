import { Meta, Story } from "@storybook/react";
import { tokenParameters } from "~storybook/configs/parameters";
import { ColorsGrid } from "~storybook/components/colors";
import colors from "./";

export default {
  title: "UI/Tokens/Colors",
  parameters: { ...tokenParameters },
} as Meta;

export const Reds: Story = () => <ColorsGrid colors={colors.reds} />;
export const Oranges: Story = () => <ColorsGrid colors={colors.oranges} />;
export const Yellows: Story = () => <ColorsGrid colors={colors.yellows} />;
export const Greens: Story = () => <ColorsGrid colors={colors.greens} />;
export const Blues: Story = () => <ColorsGrid colors={colors.blues} />;
export const Purples: Story = () => <ColorsGrid colors={colors.purples} />;
export const Notifications: Story = () => (
  <ColorsGrid colors={colors.notifications} />
);
