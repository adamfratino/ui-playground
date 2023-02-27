import { Box, Grid, Text } from "~ui/primitives";

const Hero: React.FC = () => (
  <Box variant="section" my={12}>
    <Text variant="title" as="h1" mb={8}>
      shuff.club
    </Text>
    <Grid gap={12}>
      <Grid variant="stacked" gap={3}>
        <Text variant="paragraph">
          <strong>shuff.club</strong> is an all-in-one platform that connects
          people through traditional shuffleboard, empowering them to
          self-organize matches, track their stats, and climb the leaderboard.
        </Text>
        <Text variant="paragraph">
          Whether you&apos;re a casual or competitive player, our goal is to
          offer a unique blend of social and competitive features to bring
          people together and foster a sense of community.
        </Text>
      </Grid>
      <Box border="1px solid grey" padding="thick">
        <Text variant="paragraph">
          <em>(list stats of games played, open, etc., here)</em>
        </Text>
      </Box>
    </Grid>
  </Box>
);

export default Hero;
