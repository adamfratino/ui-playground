import { Meta } from "@storybook/react";
import FooterComponent from "./Footer";

export default {
  title: "App/Modules",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Footer = () => <FooterComponent />;
