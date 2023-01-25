import { Meta, Story } from "@storybook/react";
import Banner, { Props } from "./Banner";

export default {
  title: "Components/Banner",
  parameters: { layout: "fullscreen" },
} as Meta;

const Default: Story<Props> = () => <Banner>Default</Banner>;
const Error: Story<Props> = () => <Banner variant="error">Error</Banner>;

export { Default, Error };
