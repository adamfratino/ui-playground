import {
  Box,
  Table,
  TableCell,
  TableGroup,
  TableRow,
  Text,
} from "~ui/primitives";
import { Event, EventProps } from "./Event";

export type Props = {
  events?: EventProps[];
  title?: string;
};

const Events: React.FC<Props> = ({ events, title }) => (
  <section id="singles-and-doubles-matches">
    {title && (
      <Text variant="eyebrow" as="h2" marginBottom={2}>
        {title}
      </Text>
    )}
    <Box borderWidth={1} borderStyle="solid" borderColor="greys.lightest">
      <Table
        variant="events"
        gridTemplateColumns="1fr 2fr 2fr repeat(3, 1fr)"
        width="100%"
        boxShadow="box.shallow"
      >
        <TableGroup type="head">
          <TableRow minHeight={72}>
            <TableCell type="head">Match Type</TableCell>
            <TableCell type="head">Player(s) 1</TableCell>
            <TableCell type="head">Player(s) 2</TableCell>
            <TableCell type="head">Length</TableCell>
            <TableCell type="head">Score Cap?</TableCell>
            <TableCell type="head">Stakes?</TableCell>
          </TableRow>
        </TableGroup>
        <TableGroup type="body">
          {events?.map((event) => (
            <TableRow minHeight={72} key={event.id}>
              <Event {...event} />
            </TableRow>
          ))}
        </TableGroup>
      </Table>
    </Box>
  </section>
);

export default Events;
