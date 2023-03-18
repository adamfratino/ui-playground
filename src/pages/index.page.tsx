import { NextPage } from "next";
import { Element } from "react-scroll";
import { Box } from "~ui/primitives";
import { Navigation, Hero, ChooseYourAdventure, Events } from "~modules";
import { getEvents } from "~utilities/data";
import {
  openEvents,
  pastEvents,
  upcomingEvents,
  matchEvents,
  tournamentEvents,
} from "~/utilities/events";
import { EventType } from "__mockData";

type Props = {
  events: EventType[];
};

const Homepage: NextPage<Props> = (props) => {
  const { events } = props;
  const matches = matchEvents(events);
  const tournaments = tournamentEvents(events);

  return (
    <>
      <Navigation />
      <Box variant="outer" as="main" mb={12}>
        <Box variant="section">
          <Hero
            totalPlayers={4}
            playedThisMonth={3}
            playedLastMonth={2}
            openMatches={openEvents(matches).length}
            upcomingMatches={upcomingEvents(matches).length}
            pastMatches={pastEvents(matches).length}
          />
          <ChooseYourAdventure />
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
              gridTemplateColumns="repeat(2, 1fr) repeat(2, 2fr) repeat(3, 1fr)"
              events={matches}
            />
          </Element>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;

/**
 * @todo set up mock service worker with storybook?
 * @see https://www.youtube.com/watch?v=i5tvZ9f7gJw
 * @see https://mswjs.io/
 * */
export const getStaticProps = async () => {
  const events = await getEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
    // notFound: true,
    // redirect: { destination: '/' }
  };
};
