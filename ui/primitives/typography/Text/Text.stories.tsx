import { Meta, Story } from "@storybook/react";
import Text, { Props } from "./Text";
import variants from "./variants";

export default {
  title: "Primitives/Typography/Text",
  //   parameters: { layout: "fullscreen" },
  argTypes: {
    variant: { control: { type: "select", options: Object.keys(variants) } },
  },
} as Meta;

export const Default: Story<Props> = (args) => (
  <Text markdown {...args}>
    # Lorem ipsum dolor sit amet consectetur adipisicing elit. [Distinctio](/)
    quia fugit **ab eaque voluptate ipsa** deserunt atque doloremque facilis
    vero. ### Lorem ipsum dolor sit - test - test - test Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Adipisci harum culpa, consequuntur
    obcaecati expedita aspernatur unde ut exercitationem iste eligendi.
  </Text>
);
