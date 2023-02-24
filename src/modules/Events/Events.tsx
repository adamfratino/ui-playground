import { useEffect, useRef, useState } from "react";
import { CSSProperties } from "styled-components";
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
import DisabledOverlay from "./DisabledOverlay";

type ControlsType = {
  text: string;
  backgroundColor: string;
};

export type Props = {
  events: EventProps[];
  title?: string;
  controls?: ControlsType[];
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
  controls,
  disabled,
  disabledMessage,
  gridTemplateColumns,
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
    <>
      <Box as="section" marginBottom={8} position="relative" mt={4}>
        <Box display="flex" alignItems="center" mb={4}>
          {title && (
            <Text variant="eyebrow" as="h2">
              {title}
            </Text>
          )}
          {controls && (
            <Grid gap="thin" ml="auto">
              {controls.map((control, i) => (
                <Button
                  variant="filter"
                  backgroundColor={control.backgroundColor}
                  key={i}
                >
                  {control.text}
                </Button>
              ))}
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
              {events?.map((event) => (
                <TableRow minHeight={rowHeight} key={event.id}>
                  <Event {...event} />
                </TableRow>
              ))}
            </TableGroup>
          </Table>
          {disabled && <DisabledOverlay>{disabledMessage}</DisabledOverlay>}
        </Box>
        {!disabled && showControls && (
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
    </>
  );
};

export default Events;
