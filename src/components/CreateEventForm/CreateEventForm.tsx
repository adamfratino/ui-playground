import { Grid } from "~ui/primitives";
import { Select } from "theme-ui";

const CreateEventForm: React.FC = () => (
  <Grid variant="stacked">
    <Grid columns="120px 1fr">
      <label htmlFor="matchType">match type:</label>
      <Select name="matchType" defaultValue="Singles">
        <option>Singles</option>
        <option disabled>Doubles</option>
      </Select>
    </Grid>
    <Grid columns="120px 1fr">
      <label htmlFor="matchType">frames:</label>
      <Select name="matchType" defaultValue="Singles">
        <option>4</option>
        <option disabled>8</option>
        <option disabled>12</option>
        <option disabled>16</option>
      </Select>
    </Grid>
  </Grid>
);

export default CreateEventForm;
