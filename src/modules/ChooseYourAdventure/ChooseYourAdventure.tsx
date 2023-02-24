import { Box, Grid, Text } from "~ui/primitives";
import { Button } from "~components";

const ChooseYourAdventure: React.FC = () => (
  <Box as="section" my={8}>
    <Text as="h2" variant="eyebrow" mb="thick">
      Choose Your Adventure
    </Text>
    <Grid gap={8} mb="thick">
      <Box>
        <Button variant="big" backgroundColor="notification.success" width={1}>
          Open Matches
        </Button>
        <Text variant="label" mt={4} mr={4} markdown>
          Dive right in and find someone to play! **Some matches will have a
          date selected already.** Matches that don&apos;t have a date are
          **open challanges!**
        </Text>
      </Box>
      <Box>
        <Button variant="big" backgroundColor="notification.warning" width={1}>
          Upcoming Matches
        </Button>
        <Text variant="label" mt={4} mr={4} markdown>
          Whether spectating or scouting, stop by and **check out the
          competition** if you&apos;re free.
        </Text>
      </Box>
      <Box>
        <Button variant="big" backgroundColor="notification.alert" width={1}>
          Past Matches
        </Button>
        <Text variant="label" mt={4} mr={4} markdown>
          Browse the **match history**. *(Perfect for scouting!)*
        </Text>
      </Box>
    </Grid>
  </Box>
);

export default ChooseYourAdventure;
