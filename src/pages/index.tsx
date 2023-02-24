import { Box } from "~ui/primitives";
import { Divider, Title } from "~/components";
import { JoinTheClub, ChooseYourAdventure, Events } from "~modules";
import { MOCK_EVENTS } from "../../__mockData";

const eventHeadlines = [
  "Date",
  "Type",
  "Player(s) 1",
  "Player(s) 2",
  "Frames",
  "Cap?",
  "Stakes?",
];

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
        controls={[
          { text: "Open Matches", backgroundColor: "notification.success" },
          { text: "Upcoming Matches", backgroundColor: "notification.warning" },
          { text: "Past Matches", backgroundColor: "notification.alert" },
        ]}
        headlines={eventHeadlines}
        events={MOCK_EVENTS}
        rowHeight={72}
        visibleRows={8}
        gridTemplateColumns="repeat(2, 1fr) 2fr 2fr repeat(3, 1fr)"
      />
      <Divider />
      <Events
        title="Round Robin & Tournaments"
        headlines={eventHeadlines}
        events={MOCK_EVENTS}
        disabled
        disabledMessage="Hopefully coming Winter 2023!"
      />
    </Box>
  </Box>
);

export default Homepage;
