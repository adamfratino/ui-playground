import { Box, Grid, Text } from "~ui/primitives";

const Footer: React.FC = () => (
  <Box
    as="footer"
    variant="outer"
    minHeight="auto"
    backgroundColor="background.dark"
  >
    <Box variant="section">
      <Grid gridTemplateColumns="420px 1fr" gap={8}>
        <Text variant="paragraph" color="text.body.light" fontSize={3}>
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