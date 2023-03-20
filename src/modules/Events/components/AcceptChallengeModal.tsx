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
    <Grid variant="stacked" gap={4} sx={{ maxWidth: 840 }}>
      <Grid gap={4}>
        <Box padding={4}>
          <Text as="span" variant="eyebrow" fontSize={6}>
            {player1 || players1}
          </Text>
        </Box>
        <Box padding={4}>
          <Text as="p" variant="eyebrow" fontSize={6}>
            [replace this with user or log in] [replace this with user or log
            in]
          </Text>
        </Box>
      </Grid>
      <Grid gap={4}>
        <Text as="span">{type}</Text>
        <Text as="span">{frames}</Text>
        <Text as="span">{date?.toString()}</Text>
        <Text as="span">{stakes}</Text>
        <Text as="span">{scoreCap}</Text>
      </Grid>
      <Button variant="big" backgroundColor="notification.success">
        {player1 ? `I'm` : `We're`} ready, lock it in!
      </Button>
    </Grid>
  </>
);

export default AcceptChallengeModal;
