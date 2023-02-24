import { Meta } from "@storybook/react";
import EventsComponent from "./Events";
import { MOCK_EVENTS } from "__mockData";

export default {
  title: "App/Modules/Events",
} as Meta;

export const Default = () => (
  <EventsComponent
    controls={[
      { text: "Open Matches", backgroundColor: "notification.success" },
      { text: "Upcoming Matches", backgroundColor: "notification.warning" },
      { text: "Past Matches", backgroundColor: "notification.alert" },
    ]}
    events={MOCK_EVENTS}
  />
);
export const Disabled = () => (
  <EventsComponent
    events={MOCK_EVENTS}
    title="Round Robin & Tournaments"
    disabled
    disabledMessage="Coming Soon!"
  />
);
