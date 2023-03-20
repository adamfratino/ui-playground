import { Meta } from "@storybook/react";
import React from "react";
import { tokenParameters } from "~storybook/configs/parameters";
import { Box, Grid, Text } from "~ui/primitives";
import colors from "./colors";

export default {
  title: "UI/Tokens/Colors",
  parameters: { ...tokenParameters },
} as Meta;

/** We need to strip the color aliases added by the theme for some reason */
const {
  reds,
  oranges,
  yellows,
  greens,
  blues,
  purples,
  greys,
  blacks,
  whites,
} = colors;
const palette = {
  reds,
  oranges,
  yellows,
  greens,
  blues,
  purples,
  greys,
  blacks,
  whites,
};

export const Colors: React.FC = () => (
  <Grid variant="auto">
    {Object.entries(palette).map((color, i) => (
      <Grid key={i}>
        <Box>
          <Text as="h3" variant="eyebrow" fontSize={5}>
            {color[0]}
          </Text>
        </Box>
        {Object.values(color[1]).map((shade, i) => (
          <Box
            key={i}
            backgroundColor={shade as string}
            boxShadow="box.shallow"
            sx={{ minHeight: 80 }}
          >
            <Box>
              <Text as="span" variant="label">
                {(shade as string).toUpperCase()}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    ))}
  </Grid>
);
