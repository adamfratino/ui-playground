import { flattenVariant } from "~ui/helpers";
import { Box } from "~ui/primitives/layout";
import { Event, EventRow, EventText, EventProps } from "./Event";
import variants from "./variants";

export type Props = {
  variant?: keyof typeof variants;
  events?: EventProps[];
};

const Events: React.FC<Props> = ({ variant, events }) => (
  <Box as="table" width="100%">
    <thead>
      <EventRow>
        <EventText isHeader>Match Type</EventText>
        <EventText isHeader>Player(s) 1</EventText>
        <EventText isHeader>Player(s) 2</EventText>
        <EventText isHeader>Length</EventText>
        <EventText isHeader>Score Cap?</EventText>
        <EventText isHeader>Stakes?</EventText>
      </EventRow>
    </thead>
    <tbody>
      {events?.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </tbody>
  </Box>
);

export default Events;
