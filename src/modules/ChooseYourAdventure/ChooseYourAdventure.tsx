import { Box, Grid, Text } from "~ui/primitives";
import { Button } from "~components";
import { Link } from "react-scroll";

const ChooseYourAdventure: React.FC = () => (
  <Box as="section" my={12}>
    <Text as="h2" variant="eyebrow" mb="thick">
      Choose Your Adventure:
    </Text>
    <Grid gap={8} mb="thick">
      <AdventureButton
        backgroundColor="notification.success"
        buttonText="Open Matches"
        descriptionText="Dive right in and find someone to play! **Some matches will have a date selected already.** Matches that don't have a date are **open challanges, where you and your opponent pick a date together!**"
      />
      <AdventureButton
        backgroundColor="notification.warning"
        buttonText="Upcoming Matches"
        descriptionText="Whether spectating or scouting, stop by and **check out the competition** if you're free."
      />
      <AdventureButton
        backgroundColor="notification.alert"
        buttonText="Past Matches"
        descriptionText="Browse the **match history**. *(Perfect for scouting!)*"
      />
    </Grid>
  </Box>
);

export default ChooseYourAdventure;

/** @todo update props once Button is moved to primitives */
type AdventureButtonProps = {
  buttonText: string;
  descriptionText?: string;
  backgroundColor?: string;
};

const AdventureButton: React.FC<AdventureButtonProps> = ({
  buttonText,
  descriptionText,
  backgroundColor,
}) => (
  <Box>
    <Link to="matches" smooth={true} duration={350}>
      <Button variant="big" backgroundColor={backgroundColor} width={1}>
        {buttonText}
      </Button>
    </Link>
    {descriptionText && (
      <Text as="div" variant="label" mt={4} mr={4} markdown>
        {descriptionText}
      </Text>
    )}
  </Box>
);
