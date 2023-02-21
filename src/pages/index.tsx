import { Box, Text } from "~ui/primitives";
import { Events } from "~modules";
import { MOCK_EVENTS } from "../modules/Events/__mockData";

const Homepage: React.FC = () => (
  <Box variant="outer">
    <Box variant="section">
      <Text variant="title" marginBottom={8}>
        Big Title
      </Text>
      <Events events={MOCK_EVENTS} />
    </Box>
  </Box>
);

export default Homepage;
