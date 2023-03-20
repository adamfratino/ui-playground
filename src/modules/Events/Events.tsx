import { Element } from "react-scroll";
import { Box, Table } from "~ui/primitives";
import { EventType } from "__mockData";
import { Filters, Event } from "./components";

export type Props = {
  events: EventType[];
  title?: string;
  headlines?: string[];
};

const Events: React.FC<Props> = ({ events, title, headlines }) => {
  return (
    <Box as="section" variant="section">
      <Element name="matches">
        <Filters events={events} title={title} count={events.length} />
        <Table>
          {headlines && (
            <Table.Group type="head">
              <Table.Row>
                {headlines.map((headline, i) => (
                  <Table.Cell key={i} type="head">
                    {headline}
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Group>
          )}
          <Table.Group type="body">
            {events.map((event) => (
              <Table.Row key={event.id}>
                <Event {...event} />
              </Table.Row>
            ))}
          </Table.Group>
        </Table>
      </Element>
    </Box>
  );
};

export default Events;
