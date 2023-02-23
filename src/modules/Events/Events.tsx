import { useEffect, useRef, useState } from "react";
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
  events: EventProps[];
  title?: string;
  headlines?: string[];
  rowHeight?: number;
  visibleRows?: number;
};

const Events: React.FC<Props> = ({
  events,
  title,
  headlines,
  rowHeight = 72,
  visibleRows,
}) => {
  const scrollRef = useRef<HTMLTableElement>(null);
  const [tableOffset, setTableOffset] = useState(0);
  const showControls = visibleRows && events.length > visibleRows;

  const handlePagination = (direction: "up" | "down") => {
    direction === "down"
      ? setTableOffset(tableOffset + rowHeight)
      : setTableOffset(tableOffset - rowHeight);
  };

  useEffect(() => {
    const table = scrollRef.current!;
    table.scrollTop = tableOffset;
  }, [tableOffset]);

  return (
    <Box as="section" marginBottom={8}>
      <Box display="flex" alignItems="center" mb={4}>
        {title && (
          <Text variant="eyebrow" as="h2">
            {title}
          </Text>
        )}
        <Grid gap="thin" ml="auto">
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
      <Box
        borderWidth={1}
        borderStyle="solid"
        borderColor="greys.lightest"
        maxHeight={
          visibleRows
            ? rowHeight * (headlines ? visibleRows + 1 : visibleRows)
            : "none"
        }
        overflowY="scroll"
        ref={scrollRef}
      >
        <Table
          variant="events"
          gridTemplateColumns="repeat(2, 1fr) 2fr 2fr repeat(3, 1fr)"
          width="100%"
          boxShadow="box.shallow"
        >
          {headlines && (
            <TableGroup type="head" position="sticky" top="0px">
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
            {events?.map((event) => (
              <TableRow minHeight={rowHeight} key={event.id}>
                <Event {...event} />
              </TableRow>
            ))}
          </TableGroup>
        </Table>
      </Box>
      {showControls && (
        <Box display="flex" mt="thin">
          <Grid gap={2} ml="auto">
            <Button variant="arrow" onClick={() => handlePagination("down")}>
              &darr;
            </Button>
            <Button variant="arrow" onClick={() => handlePagination("up")}>
              &uarr;
            </Button>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Events;
