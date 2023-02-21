import { Meta, Story } from "@storybook/react";
import Text, { Props } from "./Text";
import { variantArgTypes } from "~storybook/configs";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  component: Text,
  argTypes: {
    ...variantArgTypes(variants),
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
Default.storyName = "Text";
