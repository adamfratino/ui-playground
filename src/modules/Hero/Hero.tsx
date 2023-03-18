import { Box, Grid, Text } from "~ui/primitives";
import ClubDetails, {
  Props as ClubDetailsProps,
} from "./components/ClubDetails";

type Props = ClubDetailsProps;

const Hero: React.FC<Props> = ({ ...props }) => (
  <Box variant="section" as="section" my={12}>
    <Text as="h1" variant="title" mb={8}>
      shuff.club
    </Text>
    <Grid gap={8}>
      <Grid variant="stacked" gap={3}>
        <Text as="p" variant="paragraph">
          <strong>shuff.club</strong> is an all-in-one platform that connects
          people through traditional shuffleboard, empowering them to
          self-organize matches, track their stats, and climb the leaderboard.
        </Text>
        <Text as="p" variant="paragraph">
          Whether you&apos;re a casual or competitive player, our goal is to
          offer a unique blend of social and competitive features to bring
          people together and foster a sense of community.
        </Text>
      </Grid>
      <Box border="1px solid grey" p="thick">
        <ClubDetails {...props} />
      </Box>
    </Grid>
  </Box>
);

export default Hero;
