import styled from "styled-components";
import { Box, Grid, Text, TableCell } from "~ui/primitives";
import { Button } from "~components";
import {
  SinglesPlayerType,
  DoublesPlayersType,
  TournamentPlayersType,
  EventType,
} from "__mockData";

/** @todo figure out these conditional types */
export const Event: React.FC<EventType> = ({
  type,
  date,
  frames,
  scoreCap,
  stakes,
  player1,
  player2,
  players1,
  players2,
  players,
  whoWon,
  spots,
}) => {
  const matchType = type === "singles" || type === "doubles";
  const tournamentType = type === "round robin" || type === "bracket";

  return (
    <>
      <DateCell date={date} />
      <TableCell textTransform="capitalize">{type}</TableCell>
      {matchType && (
        <>
          <MatchPlayersCell
            player={player1}
            players={players1}
            whoWon={whoWon}
          />
          <MatchPlayersCell
            player={player2}
            players={players2}
            whoWon={whoWon}
          />
        </>
      )}
      {tournamentType && (
        <>
          <TableCell>{spots}</TableCell>
          <TournamentPlayersCell players={players} />
          <TableCell>
            {!whoWon ? (
              <Button variant="primary" fontSize={1}>
                Register
              </Button>
            ) : (
              <Text variant="label">
                <strong>Winner:</strong> {whoWon}
              </Text>
            )}
          </TableCell>
        </>
      )}
      <TableCell>{frames ?? "-"}</TableCell>
      <TableCell>{scoreCap ?? "-"}</TableCell>
      <TableCell>{stakes ? `$${stakes}` : "-"}</TableCell>
    </>
  );
};

const DateCell: React.FC<Pick<EventType, "date">> = ({ date }) => {
  const readableDate = date && [
    date.toLocaleDateString("en-us", { weekday: "long" }),
    date.toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  ];

  return (
    <TableCell>
      {readableDate ? (
        <Grid as="time" variant="stacked">
          <span>{readableDate[0]}</span>
          <span>{readableDate[1]}</span>
        </Grid>
      ) : (
        <Button variant="primary" fontSize={1}>
          Set Date
        </Button>
      )}
    </TableCell>
  );
};

const MatchPlayersCell: React.FC<{
  player?: SinglesPlayerType;
  players: DoublesPlayersType;
  whoWon?: SinglesPlayerType | DoublesPlayersType;
}> = ({ player, players, whoWon }) => {
  const isWinner = JSON.stringify(whoWon) === JSON.stringify(players);

  return (
    <TableCell centered={!player && !players}>
      {player && (
        <Text as="span" fontWeight={player === whoWon ? 600 : 500}>
          {player}
        </Text>
      )}
      {players &&
        Array.from(players).map((player, i) => (
          <Text as="span" key={i} fontWeight={isWinner ? 600 : 500}>
            {player}
          </Text>
        ))}
      {!player && !players && (
        <Button variant="primary" fontSize={1} width={1}>
          Accept the Challenge!
        </Button>
      )}
    </TableCell>
  );
};

const TournamentPlayersCell: React.FC<{
  players: TournamentPlayersType;
}> = ({ players }) => (
  <TableCell>
    <Box>
      {Array.from(players).map((player, i) => (
        <StyledTournamentName forwardedAs="span" key={i}>
          {player}
        </StyledTournamentName>
      ))}
    </Box>
  </TableCell>
);

const StyledTournamentName = styled(Text)`
  &:not(:last-of-type)::after {
    content: ", ";
  }
`;
