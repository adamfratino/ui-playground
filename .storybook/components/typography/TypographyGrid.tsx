import React from "react";
import { Box, Text, Grid } from "../../../ui/primitives";
import Characters from "./Characters";

type Props = {
  font: string;
  family: string;
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const characters = [alphabet, alphabet.toLowerCase(), numbers];

const TypographyGrid: React.FC<Props> = ({ font, family }) => (
  <Box>
    <Text as="h2" variant="eyebrow" fontSize={8}>
      {family}
    </Text>
    <Text as="h3">
      <strong>font-family: </strong>
      {font};
    </Text>
    <Grid columns="repeat(10, 50px)">
      {characters.map((chars, i) => (
        <Characters key={i} font={font} chars={chars.split("")} />
      ))}
    </Grid>
  </Box>
);

export default TypographyGrid;
