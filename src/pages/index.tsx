import { Events } from "~components";
import { Box, Text } from "~ui/primitives";
import { MOCK_EVENTS } from "../components/Events/__mockData";

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
