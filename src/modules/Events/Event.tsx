import styled from "styled-components";
import { Box, Grid, Text } from "~ui/primitives";
import { Button } from "~components";

type SinglesType = [string];
type DoublesType = [string, string];
type TournamentType = string[];

export type EventProps = {
  id: number;
  type: "singles" | "doubles" | "tournament";
  players: SinglesType[] | DoublesType[] | TournamentType;
  frames: 4 | 8 | 12 | 16;
  cap?: number;
  stakes?: number;
};

export const Event: React.FC<EventProps> = ({
  type,
  players,
  frames,
  cap,
  stakes,
}) => (
  <>
    <EventText>{type}</EventText>
    <EventText>
      {Array.from(players[0]).map((player, i) => (
        <PlayerName key={i}>{player}</PlayerName>
      ))}
    </EventText>
    <EventText>
      {players[1] ? (
        Array.from(players[1]).map((player, i) => (
          <PlayerName key={i}>{player}</PlayerName>
        ))
      ) : (
        <Button variant="join">Accept the Challenge!</Button>
      )}
    </EventText>
    <EventText>{frames}</EventText>
    <EventText>{cap ?? "-"}</EventText>
    <EventText>{stakes ? `$${stakes}.00` : "-"}</EventText>
  </>
);

export const EventRow: React.FC<{
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor }) => (
  <Grid
    as="tr"
    gridTemplateColumns="1fr 2fr 2fr repeat(3, 1fr)"
    minHeight={72}
    backgroundColor={backgroundColor}
  >
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
    <Box display="flex" alignItems="center" as={element}>
      <Text
        variant="label"
        fontWeight={fontWeight}
        textAlign="left"
        padding={3}
      >
        {children}
      </Text>
    </Box>
  );
};

const PlayerName = styled.span`
  font-weight: 600;
  &:not(:last-child)::after {
    content: " & ";
    font-weight: 500;
  }
`;
