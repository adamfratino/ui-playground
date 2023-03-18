import { Box, Button, Grid, Text } from "~ui/primitives";
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
        descriptionText="Dive right in and **find someone to play!** Keep an eye on the first column; **if a date isn't already selected, you and your opponent can pick a date together!**"
      />
      <AdventureButton
        backgroundColor="notification.warning"
        buttonText="Upcoming Matches"
        descriptionText="Have a look at **what's coming up** and consider visiting the club to spectate if you're in the area."
      />
      <AdventureButton
        backgroundColor="notification.alert"
        buttonText="Past Matches"
        descriptionText="Take a trip down memory lane and browse some **recently completed matches.**"
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
  onClick?: () => void;
};

const AdventureButton: React.FC<AdventureButtonProps> = ({
  buttonText,
  descriptionText,
  backgroundColor,
}) => (
  <Box>
    <Link to="matches" smooth={true} duration={350}>
      <Button variant="big" backgroundColor={backgroundColor}>
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
