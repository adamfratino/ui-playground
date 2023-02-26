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
import { Event } from "./Event";
import { EventType } from "__mockData";
import DisabledOverlay from "./DisabledOverlay";

type ControlsType = {
  text: string;
  backgroundColor: string;
};

export type Props = {
  events: EventType[];
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

  /**
   * @todo make not wonky
   * try replacing pagination (prefer scroll) with a scroll invite that hides/toggles at the end
   * @note needs to observe scroll (introduce react-use?)
   * */
  const handlePagination = (direction: "up" | "down") => {
    direction === "up"
      ? setTableOffset(0)
      : setTableOffset(scrollRef.current!.getBoundingClientRect().height);
  };

  useEffect(() => {
    scrollRef.current!.scrollTop = tableOffset;
  }, [tableOffset]);

  return (
    <>
      <Box as="section" marginBottom={8} position="relative" mt={4}>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          alignItems={["flex-start", "flex-end"]}
        >
          {title && (
            <Text variant="eyebrow" as="h2" mb={4}>
              {title}
            </Text>
          )}
          {!disabled && controls && (
            <Grid gap="thin" ml={[null, "auto"]} mt={[null, "16px"]} mb={4}>
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
