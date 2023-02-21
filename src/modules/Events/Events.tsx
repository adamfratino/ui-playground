import styled from "styled-components";
import { colors } from "~ui/tokens";
import { Box } from "~ui/primitives";
import { Event, EventRow, EventText, EventProps } from "./Event";

export type Props = {
  events?: EventProps[];
};

const { grey } = colors;

const Events: React.FC<Props> = ({ events }) => (
  <Box as="table" width="100%" border="1px solid #ccc" boxShadow="box.shallow">
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
    <TBody>
      {events?.map((event, i) => (
        <EventRow
          key={event.id}
          backgroundColor={i % 2 === 0 ? "#eee" : "#fff"}
        >
          <Event {...event} />
        </EventRow>
      ))}
    </TBody>
  </Box>
);

export default Events;

const TBody = styled.tbody`
  & > *:nth-child(even) {
    background-color: ${grey};
  }
`;
