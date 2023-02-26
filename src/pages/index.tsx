import { Box } from "~ui/primitives";
import { Divider, Title } from "~/components";
import { JoinTheClub, ChooseYourAdventure, Events } from "~modules";
import { MOCK_EVENTS } from "../../__mockData";

const MATCH_HEADLINES = [
  "Date",
  "Type",
  "Player(s) 1",
  "Player(s) 2",
  "Frames",
  "Cap?",
  "Stakes?",
];

const TOURNAMENT_HEADLINES = [
  "Date",
  "Type",
  "Spots",
  "Players",
  "Register?",
  "Frames",
  "Cap?",
  "Stakes?",
];

const EVENT_FILTERS = [
  { text: "Open", backgroundColor: "notification.success" },
  { text: "Upcoming", backgroundColor: "notification.warning" },
  { text: "Past", backgroundColor: "notification.alert" },
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
        controls={EVENT_FILTERS}
        headlines={MATCH_HEADLINES}
        events={MOCK_EVENTS.filter(
          (ev) => ev.type === "singles" || ev.type === "doubles"
        )}
        rowHeight={72}
        visibleRows={8}
        gridTemplateColumns="1fr 1fr repeat(2, 2fr) repeat(3, 1fr)"
      />
      <Divider />
      <Events
        title="Round Robin & Bracket Tournaments"
        controls={EVENT_FILTERS}
        headlines={TOURNAMENT_HEADLINES}
        gridTemplateColumns="2fr 2fr 1fr 5fr 4fr repeat(3, 1fr)"
        events={MOCK_EVENTS.filter(
          (ev) => ev.type === "round robin" || ev.type === "bracket"
        )}
        // disabled
        // disabledMessage="Hopefully coming Winter 2023!"
      />
    </Box>
  </Box>
);

export default Homepage;
