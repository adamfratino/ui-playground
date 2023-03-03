import { Grid, Box } from "~ui/primitives";
import { EventType } from "__mockData";

type Props = Omit<EventType, "id" | "players" | "whoWon" | "spots" | "whoWon">;

const AcceptChallengeModal: React.FC<Props> = ({
  type,
  frames,
  date,
  scoreCap,
  stakes,
  player1,
  players1,
}) => (
  <Grid gap="thick">
    <Box border="1px solid grey" padding="thick">
      {player1 || players1}
    </Box>
    <Box border="1px solid grey" padding="thick">
      [replace this with user or log in]
    </Box>
  </Grid>
);

export default AcceptChallengeModal;
