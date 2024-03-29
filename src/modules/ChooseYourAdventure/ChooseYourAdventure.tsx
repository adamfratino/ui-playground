import { Box, Button, Container, Grid, Text } from "~ui/primitives";
import { BoxProps } from "~ui/primitives/Box";
import { Link } from "react-scroll";

const options = [
  {
    buttonText: "Open Matches",
    descriptionText:
      "Dive right in and **find someone to play!** Keep an eye on the first column; **if a date isn't already selected, you and your opponent can pick a date together!**",
    backgroundColor: "notifications.success",
  },
  {
    buttonText: "Upcoming Matches",
    descriptionText:
      "Have a look at **what's coming up** and consider visiting the club to spectate if you're in the area.",
    backgroundColor: "notifications.warning",
  },
  {
    buttonText: "Past Matches",
    descriptionText:
      "Take a trip down memory lane and browse some **recently completed matches.**",
    backgroundColor: "notifications.alert",
  },
];

const ChooseYourAdventure: React.FC = () => (
  <Container as="section" variant="section">
    <Text as="h2" variant="eyebrow">
      Choose Your Adventure:
    </Text>
    <Grid variant="auto">
      <AdventureButton {...options[0]} />
      <AdventureButton {...options[1]} />
      <AdventureButton {...options[2]} />
    </Grid>
  </Container>
);

export default ChooseYourAdventure;

type AdventureButtonProps = {
  as?: BoxProps["as"];
  buttonText: string;
  descriptionText?: string;
  backgroundColor?: string;
};

const AdventureButton: React.FC<AdventureButtonProps> = ({
  as,
  buttonText,
  descriptionText,
  backgroundColor,
}) => (
  <Box as={as}>
    <Link to="matches" smooth={true} duration={350}>
      <Button variant="big" bg={backgroundColor}>
        {buttonText}
      </Button>
    </Link>
    {descriptionText && (
      <Text as="p" variant="label" isMarkdown={true}>
        {descriptionText}
      </Text>
    )}
  </Box>
);
