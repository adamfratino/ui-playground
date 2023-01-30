import { Meta } from "@storybook/react";
import { ColorsGrid, parameters } from "~ui/storybook";

export default {
  title: "Tokens/Colors",
  parameters: { ...parameters.tokens },
} as Meta;

export const Colors = () => <ColorsGrid />;
