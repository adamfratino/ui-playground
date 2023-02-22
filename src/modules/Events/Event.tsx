import styled from "styled-components";
import { TableCell } from "~ui/primitives";
import { Button } from "~components";

/** @todo these types should prob live somewhere else */
type SinglesType = [string];
type DoublesType = [string, string];
type TournamentType = string[];
type PlayersType = SinglesType[] | DoublesType[] | TournamentType;

export type EventProps = {
  id: number;
  type: "singles" | "doubles" | "tournament";
  players: PlayersType;
  frames: 4 | 8 | 12 | 16;
  cap?: number;
  stakes?: number;
  date?: string;
  winners?: PlayersType;
};

export const Event: React.FC<EventProps> = ({
  type,
  players,
  frames,
  cap,
  stakes,
  date,
  winners,
}) => (
  <>
    <TableCell>{date ?? "-"}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>
      {Array.from(players[0]).map((player, i) => (
        <PlayerName key={i}>{player}</PlayerName>
      ))}
    </TableCell>
    <TableCell>
      {players[1] ? (
        Array.from(players[1]).map((player, i) => (
          <PlayerName key={i}>{player}</PlayerName>
        ))
      ) : (
        <Button variant="primary">Accept the Challenge!</Button>
      )}
    </TableCell>
    <TableCell>{frames}</TableCell>
    <TableCell>{cap ?? "-"}</TableCell>
    <TableCell>{stakes ? `$${stakes}.00` : "-"}</TableCell>
  </>
);

const PlayerName = styled.span`
  &:not(:last-child)::after {
    content: " & ";
  }
`;
