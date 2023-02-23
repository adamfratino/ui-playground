import { Box, Grid, Text } from "~ui/primitives";
import { Button } from "~components";

const ChooseYourAdventure: React.FC = () => (
  <Box as="section" my={8}>
    <Text as="h2" variant="eyebrow" mb="thick">
      Choose Your Adventure
    </Text>
    <Grid gap={8} mb="thick">
      <Button variant="big" backgroundColor="notification.alert">
        Past Matches
      </Button>
      <Button variant="big" backgroundColor="notification.warning">
        Upcoming Matches
      </Button>
      <Button variant="big" backgroundColor="notification.success">
        Open Matches
      </Button>
    </Grid>
    <Grid gap={8}>
      <Text variant="label" mr={4}>
        Lorem ipsum dolor, sit amet consectetur.
      </Text>
      <Text variant="label" mr={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci
        qui, inventore totam suscipit praesentium facere!
      </Text>
      <Text variant="label" mr={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        laudantium harum odit!
      </Text>
    </Grid>
  </Box>
);

export default ChooseYourAdventure;
