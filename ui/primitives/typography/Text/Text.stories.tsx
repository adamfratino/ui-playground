import { Meta, Story } from "@storybook/react";
import Text, { Props } from "./Text";

export default {
  title: "Primitives/Typography/Text",
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story<Props> = () => (
  <Text markdown>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. [Distinctio](/)
    quia fugit **ab eaque voluptate ipsa** deserunt atque doloremque facilis
    vero.
  </Text>
);
