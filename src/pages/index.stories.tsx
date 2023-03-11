import { Meta, Story } from "@storybook/react";
import { pages } from "~storybook/configs";
import { MOCK_EVENTS } from "__mockData";
import HomepageComponent from "./index.page";

export default {
  title: "App/Pages",
  parameters: { ...pages },
  args: {
    events: MOCK_EVENTS,
  },
} as Meta;

export const Homepage: Story = (args) => (
  <HomepageComponent events={args.events} />
);
