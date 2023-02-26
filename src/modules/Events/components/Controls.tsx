import { Grid } from "~ui/primitives";
import { Button } from "~components";

const Controls: React.FC = () => (
  <Grid gap="thin" ml="auto">
    {controls.map((control, i) => (
      <Button
        variant="filter"
        backgroundColor={control.backgroundColor}
        key={i}
      >
        {control.text}
      </Button>
    ))}
  </Grid>
);

export default Controls;
