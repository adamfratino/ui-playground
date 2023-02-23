import { colors } from "~ui/tokens";
import { Box, Text, TableCell } from "~ui/primitives";
import { Button } from "~components";

const { blacks, whites, yellows } = colors;

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
}) => {
  const firstTeamWins = JSON.stringify(winners) === JSON.stringify(players[0]);
  const secondTeamWins =
    players[1] && JSON.stringify(winners) === JSON.stringify(players[1]);

  return (
    <>
      <TableCell>{date ?? "TBD"}</TableCell>
      <TableCell textTransform="capitalize">{type}</TableCell>
      <TableCell
        boxShadow={firstTeamWins ? "box.inset" : undefined}
        backgroundColor={firstTeamWins ? "yellows.light" : "transparent"}
      >
        {Array.from(players[0]).map((player, i) => (
          <Text key={i}>{player}</Text>
        ))}
      </TableCell>
      <TableCell
        boxShadow={secondTeamWins ? "box.inset" : undefined}
        backgroundColor={secondTeamWins ? "yellows.light" : "transparent"}
        centered={!players[1]}
      >
        {players[1] ? (
          Array.from(players[1]).map((player, i) => (
            <Text key={i}>{player}</Text>
          ))
        ) : (
          <Button variant="primary" width="100%">
            Accept the Challenge!
          </Button>
        )}
      </TableCell>
      <TableCell>{frames}</TableCell>
      <TableCell>{cap ?? "-"}</TableCell>
      <TableCell>{stakes ? `$${stakes}` : "-"}</TableCell>
    </>
  );
};
