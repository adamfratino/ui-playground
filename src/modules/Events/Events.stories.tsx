import { Meta } from "@storybook/react";
import EventsComponent from "./Events";
import { MOCK_EVENTS } from "__mockData";

export default {
  title: "App/Modules/Events",
} as Meta;

export const Default = () => (
  <EventsComponent
    title="Singles & Doubles Matches"
    events={MOCK_EVENTS.filter(
      (ev) => ev.type === "singles" || ev.type === "doubles"
    )}
  />
);
export const Disabled = () => (
  <EventsComponent
    events={MOCK_EVENTS.filter(
      (ev) => ev.type === "bracket" || ev.type === "round robin"
    )}
    title="Round Robin & Tournaments"
    disabled
    disabledMessage="Coming Soon!"
  />
);
