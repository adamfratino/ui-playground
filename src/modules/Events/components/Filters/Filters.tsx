import { Box, Grid, Button } from "~ui/primitives";
import { EventType } from "__mockData";
import FiltersTitle from "./FiltersTitle";
import FilterButton from "./FilterButton";

const filters = [
  { text: "Open", bg: "notification.success" },
  { text: "Upcoming", bg: "notification.warning" },
  { text: "Past", bg: "notification.alert" },
];

type Props = {
  events: EventType[];
  title?: string;
  count?: number;
};

const Filters: React.FC<Props> = ({ title, count }) => (
  <Box display="flex">
    {title && <FiltersTitle title={title} count={count} />}
    <Grid variant="auto" ml="auto" inline={true}>
      <ResetButton />
      {filters.map(({ text, bg }) => (
        <FilterButton key={text} text={text} bg={bg} />
      ))}
    </Grid>
  </Box>
);

export default Filters;

const ResetButton: React.FC = () => (
  <Button variant="filter" bg="transparent">
    Reset
  </Button>
);
