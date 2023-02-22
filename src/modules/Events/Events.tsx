import {
  Box,
  Grid,
  Table,
  TableCell,
  TableGroup,
  TableRow,
  Text,
} from "~ui/primitives";
import { Button } from "~components";
import { Event, EventProps } from "./Event";

export type Props = {
  events?: EventProps[];
  title?: string;
  headlines?: string[];
};

const Events: React.FC<Props> = ({ events, title, headlines }) => (
  <Box as="section" marginBottom={8}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      {title && (
        <Text variant="eyebrow" as="h2">
          {title}
        </Text>
      )}
      <Grid gap="thin">
        <Button variant="filter" backgroundColor="notification.alert">
          Past Matches
        </Button>
        <Button variant="filter" backgroundColor="notification.warning">
          Upcoming Matches
        </Button>
        <Button variant="filter" backgroundColor="notification.success">
          Open Matches
        </Button>
      </Grid>
    </Box>
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
    <Box display="flex" mt="thin">
      <Grid gap={2} ml="auto">
        <Button variant="arrow">&larr;</Button>
        <Button variant="arrow">&rarr;</Button>
      </Grid>
    </Box>
  </Box>
);

export default Events;
