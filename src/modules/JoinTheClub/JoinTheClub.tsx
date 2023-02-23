import { Box, Grid, Text } from "~ui/primitives";
import { Button } from "~components";

const JoinTheClub: React.FC = () => (
  <Box as="section" my={8}>
    <Text as="h2" variant="eyebrow" mb="thick">
      Join The Club
    </Text>
    <Grid gap={8} mb="thick" minHeight={120}>
      <Button variant="big" backgroundColor="brand.primary" fontSize={7}>
        Sign Up
      </Button>
      <Button
        variant="big"
        backgroundColor="transparent"
        border="4px solid black"
        fontSize={7}
      >
        Log In
      </Button>
    </Grid>
    <Grid gap={8}>
      <Text variant="paragraph" mr={4}>
        Lorem ipsum dolor, sit amet consectetur.
      </Text>
      <Text variant="paragraph" mr={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos adipisci
        qui, inventore totam suscipit praesentium facere!
      </Text>
    </Grid>
  </Box>
);

export default JoinTheClub;
