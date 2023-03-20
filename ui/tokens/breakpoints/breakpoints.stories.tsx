import { Meta } from "@storybook/react";
import React from "react";
import breakpoints from "./breakpoints";
import { tokenParameters } from "~storybook/configs/parameters";

export default {
  title: "UI/Tokens/Breakpoints",
  parameters: { ...tokenParameters },
} as Meta;

export const Breakpoints: React.FC = () => (
  <ul>
    {breakpoints.map((breakpoint: any, i: number) => (
      <li key={i}>{breakpoint}</li>
    ))}
  </ul>
);
