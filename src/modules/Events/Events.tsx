import { Element } from "react-scroll";
import { Box, Table, TableCell, TableGroup, TableRow } from "~ui/primitives";
import { EventType } from "__mockData";
import { Filters, Event } from "./components";

export type Props = {
  events: EventType[];
  title?: string;
  headlines?: string[];
  rowHeight?: number;
};

const Events: React.FC<Props> = ({
  events,
  title,
  headlines,
  rowHeight = 64,
}) => {
  return (
    <Box as="section" variant="section">
      <Element name="matches">
        <Filters events={events} title={title} count={events.length} />
        <Table variant="events" width="100%" boxShadow="box.shallow">
          {headlines && (
            <TableGroup type="head">
              <TableRow minHeight={rowHeight}>
                {headlines.map((headline, i) => (
                  <TableCell type="head" key={i}>
                    {headline}
                  </TableCell>
                ))}
              </TableRow>
            </TableGroup>
          )}
          <TableGroup type="body">
            {events.map((event) => (
              <TableRow minHeight={rowHeight} key={event.id}>
                <Event {...event} />
              </TableRow>
            ))}
          </TableGroup>
        </Table>
      </Element>
    </Box>
  );
};

export default Events;
