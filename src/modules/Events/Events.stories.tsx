import { Meta } from "@storybook/react";
import Events from "./Events";
import { MOCK_EVENTS } from "__mockData";

export default {
  title: "App/Modules/Events",
  component: Events,
} as Meta;

export const Matches = () => <Events events={MOCK_EVENTS} />;
