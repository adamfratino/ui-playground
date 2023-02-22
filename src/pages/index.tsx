import { Box, Text } from "~ui/primitives";
import { Title } from "~/components";
import { Events } from "~modules";
import { MOCK_EVENTS } from "../../__mockData";

const Homepage: React.FC = () => (
  <Box variant="outer" as="main">
    <Box variant="section">
      <Title>shuff.club</Title>
      <Events title="Singles & Doubles Matches" events={MOCK_EVENTS} />
    </Box>
  </Box>
);

export default Homepage;
