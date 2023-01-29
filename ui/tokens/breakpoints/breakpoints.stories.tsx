import { Meta } from "@storybook/react";
import { BreakpointsGrid } from "~ui/storybook";
import { parameters } from "~ui/storybook";

export default {
  title: "Tokens/Breakpoints",
  ...parameters.tokens,
} as Meta;

export const Breakpoints = () => <BreakpointsGrid />;
