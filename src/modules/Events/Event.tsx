import styled from "styled-components";
import { TableCell } from "~ui/primitives";
import { Button } from "~components";

/** @todo these types should prob live somewhere else */
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
        <Button variant="join">Accept the Challenge!</Button>
      )}
    </TableCell>
    <TableCell>{frames}</TableCell>
    <TableCell>{cap ?? "-"}</TableCell>
    <TableCell>{stakes ? `$${stakes}.00` : "-"}</TableCell>
  </>
);

const PlayerName = styled.span`
  font-weight: 600;
  &:not(:last-child)::after {
    content: " & ";
    font-weight: 500;
  }
`;
