import { Box, Grid, Text } from "~ui/primitives";

const Footer: React.FC = () => (
  <Box as="footer" variant="outer" backgroundColor="black">
    <Box variant="section">
      <Grid columns="420px 1fr">
        <Text as="p" variant="paragraph" color="white" fontSize={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, vel
          incidunt? Alias, enim in totam modi possimus numquam sint, dolorem
          explicabo animi dolore illo ex, ipsum quos quo magni.
        </Text>
        <div />
      </Grid>
    </Box>
  </Box>
);

export default Footer;
