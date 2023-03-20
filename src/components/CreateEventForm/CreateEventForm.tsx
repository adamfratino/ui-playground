import { Box, Grid } from "~ui/primitives";
import { Select } from "theme-ui";

const CreateEventForm: React.FC = () => (
  <Grid variant="stacked" gap={2}>
    <Grid columns="120px 1fr" gap={1}>
      <label htmlFor="matchType">match type:</label>
      <Select name="matchType" defaultValue="Singles">
        <option>Singles</option>
        <option disabled>Doubles</option>
        <option disabled>Tournament</option>
        <option disabled>Round Robin</option>
      </Select>
    </Grid>
    <Grid columns="120px 1fr" gap={1}>
      <label htmlFor="matchType">frames:</label>
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
