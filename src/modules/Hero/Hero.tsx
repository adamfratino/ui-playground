import { Box, Grid, Text } from "~ui/primitives";

const Hero: React.FC = () => (
  <Box as="section" variant="section">
    <Text as="h1" variant="title">
      shuff.club
    </Text>
    <Grid variant="stacked">
      <Text as="p" variant="paragraph">
        <strong>shuff.club</strong> is an all-in-one platform that connects
        people through traditional shuffleboard, empowering them to
        self-organize matches, track their stats, and climb the leaderboard.
      </Text>
      <Text as="p" variant="paragraph">
        Whether you&apos;re a casual or competitive player, our goal is to offer
        a unique blend of social and competitive features to bring people
        together and foster a sense of community.
      </Text>
    </Grid>
  </Box>
);

export default Hero;
