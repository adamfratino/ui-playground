import { Meta, Story } from "@storybook/react";
import { ColorsGrid, parameters } from "~ui/storybook";
import colors from "./colors";

const { reds, oranges, yellows, greens, blues, purples } = colors;

export default {
  title: "Tokens/Colors",
  parameters: { ...parameters.tokens },
} as Meta;

export const Reds: Story = () => <ColorsGrid spectrum={reds} />;
export const Oranges: Story = () => <ColorsGrid spectrum={oranges} />;
export const Yellows: Story = () => <ColorsGrid spectrum={yellows} />;
export const Greens: Story = () => <ColorsGrid spectrum={greens} />;
export const Blues: Story = () => <ColorsGrid spectrum={blues} />;
export const Purples: Story = () => <ColorsGrid spectrum={purples} />;
