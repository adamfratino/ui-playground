import { Button, Grid, Box, Text } from "~ui/primitives";
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
  <>
    <Grid variant="stacked" gap="thick" maxWidth={840}>
      <Grid gap="thick">
        <Box border="1px solid grey" padding="thick" centered>
          <Text variant="eyebrow" fontSize={6}>
            {player1 || players1}
          </Text>
        </Box>
        <Box border="1px solid grey" padding="thick" centered>
          <Text variant="eyebrow" fontSize={6}>
            [replace this with user or log in] [replace this with user or log
            in]
          </Text>
        </Box>
      </Grid>
      <Grid gap="thick">
        <Text>{type}</Text>
        <Text>{frames}</Text>
        <Text>{date?.toString()}</Text>
        <Text>{stakes}</Text>
        <Text>{scoreCap}</Text>
      </Grid>
      <Button variant="big" backgroundColor="notification.success">
        {player1 ? `I'm` : `We're`} ready, lock it in!
      </Button>
    </Grid>
  </>
);

export default AcceptChallengeModal;
