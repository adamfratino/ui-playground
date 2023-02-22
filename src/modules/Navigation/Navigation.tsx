import { Box, Grid } from "~ui/primitives";
import { Button } from "~components";
import variants from "./variants";

type Props = {
  children?: React.ReactNode;
};

const Navigation: React.FC<Props> = ({ children }) => (
  <Box as="header" variants={variants} variant="outerContainer">
    <Box as="nav" variant="section" display="flex" paddingY="0 !important">
      <Grid gap={4} marginLeft="auto">
        <Button variant="primary">Sign Up</Button>
        <Button variant="secondary">Log In</Button>
      </Grid>
    </Box>
  </Box>
);

export default Navigation;
