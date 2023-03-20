import { useState } from "react";
import { Button, Grid, Text, TableCell } from "~ui/primitives";
import { Modal } from "~components";
import { SinglesPlayerType, DoublesPlayersType, EventType } from "__mockData";
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
  whoWon,
}) => {
  const matchType = type === "singles" || type === "doubles";
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
            type={type}
            player1={player1}
            players1={players1}
            frames={frames}
            stakes={stakes}
            scoreCap={scoreCap}
            date={date}
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
        <Button variant="event">Set Date</Button>
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
    <TableCell>
      {player && (
        <Text
          as="span"
          variant="label"
          fontWeight={player === whoWon ? 600 : 500}
        >
          {player}
        </Text>
      )}
      {players &&
        Array.from(players).map((player, i) => (
          <Text
            as="p"
            variant="label"
            key={i}
            fontWeight={isWinner ? 600 : 500}
          >
            {player}
          </Text>
        ))}
      {!player && !players && (
        <Button
          variant="event"
          onClick={acceptChallengeOnClick}
          sx={{ width: "100%" }}
        >
          Accept the Challenge!
        </Button>
      )}
    </TableCell>
  );
};

export default Event;
