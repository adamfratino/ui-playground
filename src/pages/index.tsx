import { Box } from "~ui/primitives";
import { Divider, Title } from "~/components";
import { JoinTheClub, ChooseYourAdventure, Events } from "~modules";
import { MOCK_EVENTS } from "../../__mockData";

const Homepage: React.FC = () => (
  <Box variant="outer" as="main">
    <Box variant="section">
      <Title>shuff.club</Title>
      <Divider />
      <JoinTheClub />
      <Divider />
      <ChooseYourAdventure />
      <Divider />
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
        rowHeight={72}
        visibleRows={6}
      />
    </Box>
  </Box>
);

export default Homepage;
