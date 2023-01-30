import { Meta } from "@storybook/react";
import { BreakpointsGrid, parameters } from "~ui/storybook";

export default {
  title: "Tokens/Breakpoints",
  parameters: { ...parameters.tokens },
} as Meta;

export const Breakpoints = () => <BreakpointsGrid />;
