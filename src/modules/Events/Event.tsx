import { Text, TableCell } from "~ui/primitives";
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
}) => {
  const firstTeamWins = JSON.stringify(winners) === JSON.stringify(players[0]);
  const secondTeamWins = JSON.stringify(winners) === JSON.stringify(players[1]);

  return (
    <>
      <TableCell>
        {date ?? (
          <Button variant="primary" fontSize={1}>
            Set Date
          </Button>
        )}
      </TableCell>
      <TableCell textTransform="capitalize">{type}</TableCell>
      <PlayerNames players={players[0]} didYaWin={firstTeamWins} />
      <PlayerNames players={players[1]} didYaWin={secondTeamWins} />
      <TableCell>{frames}</TableCell>
      <TableCell>{cap ?? "-"}</TableCell>
      <TableCell>{stakes ? `$${stakes}` : "-"}</TableCell>
    </>
  );
};

const PlayerNames: React.FC<{
  players: string | SinglesType | DoublesType;
  didYaWin: boolean;
}> = ({ players, didYaWin }) => (
  <TableCell centered={!players}>
    {players ? (
      Array.from(players).map((player, i) => (
        <Text as="span" key={i} fontWeight={didYaWin ? 600 : 500}>
          {i !== players.length - 1 ? `${player} & ` : player}
        </Text>
      ))
    ) : (
      <Button variant="primary" fontSize={1} width={1}>
        Accept the Challenge!
      </Button>
    )}
  </TableCell>
);
