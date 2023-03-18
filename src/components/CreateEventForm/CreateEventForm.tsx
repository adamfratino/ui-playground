import { Box, Grid } from "~ui/primitives";
import { Select } from "theme-ui";

const CreateEventForm: React.FC = () => (
  <Grid variant="stacked" gap={2}>
    <Grid gridTemplateColumns="120px 1fr" gap={1}>
      <Box display="flex" alignItems="center">
        <label htmlFor="matchType">match type:</label>
      </Box>
      <Select name="matchType" defaultValue="Singles">
        <option>Singles</option>
        <option disabled>Doubles</option>
        <option disabled>Tournament</option>
        <option disabled>Round Robin</option>
      </Select>
    </Grid>
    <Grid gridTemplateColumns="120px 1fr" gap={1}>
      <Box display="flex" alignItems="center">
        <label htmlFor="matchType">frames:</label>
      </Box>
      <Select name="matchType" defaultValue="Singles">
        <option>4</option>
        <option disabled>8</option>
        <option disabled>12</option>
        <option disabled>16 Robin</option>
      </Select>
    </Grid>
  </Grid>
);

export default CreateEventForm;
