import { useState } from "react";
import styled from "styled-components";
import { Box, Grid, Text, TableCell } from "~ui/primitives";
import { Button, Modal } from "~components";
import {
  SinglesPlayerType,
  DoublesPlayersType,
  TournamentPlayersType,
  EventType,
} from "__mockData";
import AcceptChallengeModal from "./AcceptChallengeModal";

const Event: React.FC<EventType> = ({
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
  ...props
}) => {
  const matchType = type === "singles" || type === "doubles";
  const tournamentType = type === "round robin" || type === "bracket";
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            acceptChallengeOnClick={() => setModalIsOpen(true)}
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
      {!player2 && !players2 && (
        <Modal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          contentLabel="Example Modal"
        >
          <AcceptChallengeModal
            player1={player1}
            players1={players1}
            type={type}
            frames={frames}
          />
        </Modal>
      )}
    </>
  );
};

const DateCell: React.FC<Pick<EventType, "date">> = ({ date }) => {
  const readableDate = date && [
    new Date(date).toLocaleDateString("en-us", { weekday: "long" }),
    new Date(date).toLocaleDateString("en-us", {
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
  players?: DoublesPlayersType;
  whoWon?: SinglesPlayerType | DoublesPlayersType;
  acceptChallengeOnClick?: () => void;
}> = ({ player, players, whoWon, acceptChallengeOnClick }) => {
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
        <Button
          variant="primary"
          fontSize={1}
          width={1}
          onClick={acceptChallengeOnClick}
        >
          Accept the Challenge!
        </Button>
      )}
    </TableCell>
  );
};

const TournamentPlayersCell: React.FC<{
  players?: TournamentPlayersType;
}> = ({ players }) => (
  <TableCell>
    <Box>
      {players &&
        Array.from(players).map((player, i) => (
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

export default Event;
