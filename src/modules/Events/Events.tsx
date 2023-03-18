import { useEffect, useRef, useState, CSSProperties } from "react";
import { useScroll } from "react-use";
import {
  Button,
  Box,
  Grid,
  Table,
  TableCell,
  TableGroup,
  TableRow,
  Text,
} from "~ui/primitives";
import {
  openEvents,
  upcomingEvents,
  pastEvents,
  isAllEvents as isAllEventsFunc,
} from "~/utilities/events";
import { EventType } from "__mockData";
import Event from "./components/Event";
import DisabledOverlay from "./components/DisabledOverlay";
import ScrollMessage from "./components/ScrollMessage";
import FilterButton from "./components/FilterButton";

export type Props = {
  events: EventType[];
  title?: string;
  headlines?: string[];
  rowHeight?: number;
  visibleRows?: number;
  disabled?: boolean;
  disabledMessage?: string;
  gridTemplateColumns?: CSSProperties["gridTemplateColumns"];
};

const Events: React.FC<Props> = ({
  events,
  title,
  headlines,
  rowHeight = 72,
  visibleRows,
  disabled,
  disabledMessage,
  gridTemplateColumns,
}) => {
  const scrollRef = useRef<HTMLTableElement>(null);
  const y = useScroll(scrollRef);
  const [atBottom, setAtBottom] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const isAllEvents = isAllEventsFunc(events, filteredEvents);

  const filters = [
    {
      text: "Open",
      backgroundColor: "notification.success",
      filter: openEvents(events),
    },
    {
      text: "Upcoming",
      backgroundColor: "notification.warning",
      filter: upcomingEvents(events),
    },
    {
      text: "Past",
      backgroundColor: "notification.alert",
      filter: pastEvents(events),
    },
  ];

  useEffect(() => {
    const table = scrollRef.current!;
    const isAtBottom =
      table.scrollTop >= table.scrollHeight - table.offsetHeight;
    isAtBottom ? setAtBottom(true) : setAtBottom(false);
  }, [y]);

  const handleFilter = (filter: Props["events"], isActive: boolean) => {
    isActive ? setFilteredEvents(events) : setFilteredEvents(filter);
  };

  return (
    <>
      <Box as="section" position="relative" mt={4}>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          alignItems={["flex-start", "flex-end"]}
        >
          {title && (
            <Text as="h2" variant="eyebrow" mb={4}>
              {title} {!disabled && `(${filteredEvents.length})`}
            </Text>
          )}
          {!disabled && (
            <Grid gap="thin" ml={[null, "auto"]} mt={[null, "16px"]} mb={4}>
              {!isAllEvents && (
                <Button
                  variant="reset"
                  onClick={() => setFilteredEvents(events)}
                >
                  Reset
                </Button>
              )}
              {filters.map(({ text, backgroundColor, filter }) => {
                const isActive =
                  JSON.stringify(filter) === JSON.stringify(filteredEvents);
                return (
                  <FilterButton
                    key={text}
                    text={text}
                    backgroundColor={backgroundColor}
                    isActive={isActive}
                    isDisabled={!isAllEvents && !isActive}
                    onClick={() => handleFilter(filter, isActive)}
                  />
                );
              })}
            </Grid>
          )}
        </Box>
        <Box
          position="relative"
          borderWidth={1}
          borderStyle="solid"
          borderColor="greys.lightest"
          maxHeight={
            visibleRows
              ? rowHeight * (headlines ? visibleRows + 1 : visibleRows) + 2
              : "none"
          }
          overflowY="scroll"
          ref={scrollRef}
        >
          <Table
            variant="events"
            gridTemplateColumns={gridTemplateColumns}
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
              {filteredEvents?.map((event) => (
                <TableRow minHeight={rowHeight} key={event.id}>
                  <Event {...event} />
                </TableRow>
              ))}
            </TableGroup>
          </Table>
          {disabled && <DisabledOverlay>{disabledMessage}</DisabledOverlay>}
        </Box>
      </Box>
      {!disabled && visibleRows && filteredEvents.length > visibleRows && (
        <ScrollMessage atBottom={atBottom} />
      )}
    </>
  );
};

export default Events;
