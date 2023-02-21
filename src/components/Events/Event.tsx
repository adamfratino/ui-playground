import { Grid } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";
import variants from "./variants";

export type EventProps = {
  id: number;
  type: "singles" | "doubles";
  players1?: string | [string, string];
  players2?: string | [string, string];
  frames: 4 | 8 | 12 | 16;
  cap?: number;
  stakes?: number;
};

export const Event: React.FC<EventProps> = ({
  type,
  players1,
  players2,
  frames,
  cap,
  stakes,
}) => (
  <EventRow>
    <EventText>{type}</EventText>
    <EventText>{players1}</EventText>
    <EventText>{players2}</EventText>
    <EventText>{frames}</EventText>
    <EventText>{cap ?? "-"}</EventText>
    <EventText>{stakes ? `$${stakes}.00` : "-"}</EventText>
  </EventRow>
);

export const EventRow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Grid as="tr" gap={3} paddingY={1}>
    {children}
  </Grid>
);

export const EventText: React.FC<{
  children: React.ReactNode;
  isHeader?: boolean;
}> = ({ isHeader, children }) => {
  const fontWeight = isHeader ? 600 : null;
  const element = isHeader ? "th" : "td";

  return (
    <Text variant="label" fontWeight={fontWeight} textAlign="left" as={element}>
      {children}
    </Text>
  );
};
