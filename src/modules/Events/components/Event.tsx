import { useState } from "react";
import { Table } from "~ui/primitives";
import { Modal } from "~components";
import { EventType } from "__mockData";

import AcceptChallengeModal from "./AcceptChallengeModal";
import DateCell from "./Table/DateCell";
import PlayersCell from "./Table/PlayersCell";

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
      <Table.Cell>{type}</Table.Cell>
      {matchType && (
        <>
          <PlayersCell player={player1} players={players1} whoWon={whoWon} />
          <PlayersCell
            player={player2}
            players={players2}
            whoWon={whoWon}
            acceptChallengeOnClick={() => setModalIsOpen(true)}
          />
        </>
      )}
      <Table.Cell>{frames ?? "-"}</Table.Cell>
      <Table.Cell>{scoreCap ?? "-"}</Table.Cell>
      <Table.Cell>{stakes ? `$${stakes}` : "-"}</Table.Cell>
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

export default Event;
