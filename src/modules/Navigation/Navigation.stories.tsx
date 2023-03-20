import { Meta } from "@storybook/react";
import NavigationComponent from "./Navigation";

export default {
  title: "App/Modules",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Navigation = () => <NavigationComponent />;
