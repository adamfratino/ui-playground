import { Box } from "~ui/primitives";
import { Divider } from "~/components";
import { Hero, ChooseYourAdventure, Events } from "~modules";
import { MOCK_EVENTS } from "../../__mockData";
import { Element } from "react-scroll";

const Homepage: React.FC = () => (
  <Box variant="outer" as="main" mb={12}>
    <Box variant="section">
      <Hero />
      <Divider />
      <ChooseYourAdventure />
      <Divider />
      <Element name="matches">
        <Events
          visibleRows={6}
          title="Singles & Doubles Matches"
          headlines={[
            "Date",
            "Type",
            "Player(s) 1",
            "Player(s) 2",
            "Frames",
            "Cap?",
            "Stakes?",
          ]}
          gridTemplateColumns="1fr 1fr repeat(2, 2fr) repeat(3, 1fr)"
          events={MOCK_EVENTS.filter(
            (ev) => ev.type === "singles" || ev.type === "doubles"
          )}
        />
      </Element>
      <Divider />
      <Events
        title="Round Robin & Bracket Tournaments"
        headlines={[
          "Date",
          "Type",
          "Spots",
          "Players",
          "Register?",
          "Frames",
          "Cap?",
          "Stakes?",
        ]}
        gridTemplateColumns="2fr 2fr 1fr 5fr 3fr repeat(3, 1fr)"
        events={MOCK_EVENTS.filter(
          (ev) => ev.type === "round robin" || ev.type === "bracket"
        )}
        disabled
        disabledMessage="Hopefully coming Winter 2023!"
      />
    </Box>
  </Box>
);

export default Homepage;
