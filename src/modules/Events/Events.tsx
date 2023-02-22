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
  headlines?: string[];
};

const Events: React.FC<Props> = ({ events, title, headlines }) => (
  <Box as="section" marginBottom={8}>
    {title && (
      <Text variant="eyebrow" as="h2" marginBottom={4}>
        {title}
      </Text>
    )}
    <Box borderWidth={1} borderStyle="solid" borderColor="greys.lightest">
      <Table
        variant="events"
        gridTemplateColumns="repeat(2, 1fr) 2fr 2fr repeat(3, 1fr)"
        width="100%"
        boxShadow="box.shallow"
      >
        {headlines && (
          <TableGroup type="head">
            <TableRow minHeight={72}>
              {headlines.map((headline, i) => (
                <TableCell type="head" key={i}>
                  {headline}
                </TableCell>
              ))}
            </TableRow>
          </TableGroup>
        )}
        <TableGroup type="body">
          {events?.map((event) => (
            <TableRow minHeight={72} key={event.id}>
              <Event {...event} />
            </TableRow>
          ))}
        </TableGroup>
      </Table>
    </Box>
  </Box>
);

export default Events;
