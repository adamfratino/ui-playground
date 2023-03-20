import { NextPage } from "next";
import { Box } from "~ui/primitives";
import { Hero, ChooseYourAdventure, Events } from "~modules";
import { getEvents } from "~utilities/data";
import { matchEvents } from "~/utilities/events";
import { EventType } from "__mockData";

type Props = {
  events: EventType[];
};

const Homepage: NextPage<Props> = (props) => {
  const { events } = props;
  const matches = matchEvents(events);

  return (
    <Box as="main" variant="outer">
      <Hero />
      <ChooseYourAdventure />
      <Events
        title="Singles & Doubles Matches"
        events={matches}
        headlines={[
          "Date",
          "Type",
          "Player(s) 1",
          "Player(s) 2",
          "Frames",
          "Cap?",
          "Stakes?",
        ]}
      />
    </Box>
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
