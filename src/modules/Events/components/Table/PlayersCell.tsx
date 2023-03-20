import { Button, Table, Text } from "~ui/primitives";
import { SinglesPlayerType, DoublesPlayersType } from "__mockData";

const PlayersCell: React.FC<{
  player?: SinglesPlayerType;
  players?: DoublesPlayersType;
  whoWon?: SinglesPlayerType | DoublesPlayersType;
  acceptChallengeOnClick?: () => void;
}> = ({ player, players, whoWon, acceptChallengeOnClick }) => {
  const isWinner = JSON.stringify(whoWon) === JSON.stringify(players);

  return (
    <Table.Cell>
      {player && (
        <Text as="span" fontWeight={player === whoWon ? 600 : 500}>
          {player}
        </Text>
      )}
      {players &&
        players.map((player, i) => (
          <Text as="span" key={i} fontWeight={isWinner ? 600 : 500}>
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
    </Table.Cell>
  );
};

export default PlayersCell;
