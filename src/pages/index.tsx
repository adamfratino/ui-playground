import { Events } from "~components";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";
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
