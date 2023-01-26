import { Meta, Story } from "@storybook/react";
import Text, { Props } from "./Text";
// import variants from "./variants";

export default {
  title: "Primitives/Typography/Text",
  parameters: { layout: "fullscreen" },
  argTypes: {
    // variant: {
    //   control: "select",
    //   options: Object.keys(variants),
    //   table: { category: "Design" },
    // },
  },
} as Meta;

export const Title: Story<Props> = () => <Text variant="title">Title</Text>;
export const Description: Story<Props> = () => (
  <Text variant="description">Description</Text>
);
