import { Box } from "~ui/primitives";
import { Title } from "~/components";
import { Events } from "~modules";
import { MOCK_EVENTS } from "../../__mockData";

const Homepage: React.FC = () => (
  <Box variant="outer" as="main">
    <Box variant="section">
      <Title>shuff.club</Title>
      <Events
        title="Singles & Doubles Matches"
        headlines={[
          "Date",
          "Match Type",
          "Player(s) 1",
          "Player(s) 2",
          "Length",
          "Score Cap?",
          "Stakes?",
        ]}
        events={MOCK_EVENTS}
      />
    </Box>
  </Box>
);

export default Homepage;
