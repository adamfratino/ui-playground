import { Meta, Story } from "@storybook/react";
import TitleComponent from "./Title";

export default {
  title: "App/Components",
} as Meta;

export const Title: Story = (args) => (
  <TitleComponent {...args}>Title</TitleComponent>
);
