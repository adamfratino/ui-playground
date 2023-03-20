import { Meta, Story } from "@storybook/react";
import React from "react";
import TypographyGrid from "~storybook/components/typography/TypographyGrid";
import { tokenParameters } from "~storybook/configs/parameters";
import { condensed, mono, sans, serif } from "./typography";

export default {
  title: "UI/Tokens/Typography",
  parameters: { ...tokenParameters },
} as Meta;

export const Condensed: Story = () => (
  <TypographyGrid font={condensed} family="condensed" />
);
export const Mono: Story = () => <TypographyGrid font={mono} family="mono" />;
export const Sans: Story = () => <TypographyGrid font={sans} family="sans" />;
export const Serif: Story = () => (
  <TypographyGrid font={serif} family="serif" />
);
