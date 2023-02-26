import { Box, Grid, Text } from "~ui/primitives";
import { Button } from "~components";

const JoinTheClub: React.FC = () => (
  <Box as="section" my={8}>
    <Text as="h2" variant="eyebrow" mb="thick">
      Join The Club
    </Text>
    <Grid gap={8} mb="thick">
      <Box>
        <Button
          variant="realBig"
          backgroundColor="notification.success"
          fontSize={7}
          width={1}
        >
          Sign Up
        </Button>
        <Text as="div" variant="paragraph" mr={4} mt={4} markdown>
          **It only takes a few seconds**, and you can verify your account
          later.
        </Text>
      </Box>
      <Box>
        <Button
          variant="realBig"
          backgroundColor="notification.warning"
          fontSize={7}
          width={1}
        >
          Log In
        </Button>
        <Text as="div" variant="paragraph" mr={4} mt={4}>
          Happy to have you back!
        </Text>
      </Box>
    </Grid>
  </Box>
);

export default JoinTheClub;
