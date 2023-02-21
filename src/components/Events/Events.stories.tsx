import { Meta } from "@storybook/react";
import Events from "./Events";
import { variantArgTypes } from "~storybook/configs";
import variants from "./variants";
import { MOCK_EVENTS } from "./__mockData";

const MATCH_EVENTS = MOCK_EVENTS.filter(
  (event) => event.type === "singles" || event.type === "doubles"
);

const TOURNAMENT_EVENTS = MOCK_EVENTS.filter(
  (event) => event.type === "round robin" || event.type === "tournament"
);

export default {
  title: "App/Components/Events",
  component: Events,
  argTypes: {
    ...variantArgTypes(variants),
  },
} as Meta;

export const Matches = () => <Events variant="matches" events={MATCH_EVENTS} />;
export const Tournaments = () => (
  <Events variant="tournaments" events={TOURNAMENT_EVENTS} />
);
