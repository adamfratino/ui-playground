import { Meta } from "@storybook/react";
import React from "react";
import { Text } from "~ui/primitives/typography";
import { Box, Grid } from "~ui/primitives/layout";
import { Introduction, parameters } from "~ui/storybook";
import colors from "./colors";

export default {
  title: "Tokens/Colors",
  parameters: { ...parameters.tokens },
} as Meta;

/** We need to strip the color aliases added by the theme for some reason */
const { reds, oranges, yellows, greens, blues, purples, greys } = colors;
const palette = { reds, oranges, yellows, greens, blues, purples, greys };

const gap = 4;

export const Colors: React.FC = () => (
  <>
    <Box variant="outer" backgroundColor="background.light">
      <Introduction
        title="Colors"
        description={[
          `Color palettes are generated by taking a **base color** and generating
        **lighter** and **darker** values programmatically, using the handy
        [*lighten()*](https://polished.js.org/docs/#lighten) and
        [*darken()*](https://polished.js.org/docs/#darken) functions included
        with [**polished**](https://polished.js.org/).`,
          `The *singular variable* (i.e. **"red"**) of a color is equal to its
        *base value* (i.e. **"reds.base"**). Your team should decide together
        re: which syntax to use.`,
        ]}
      />
      <Headers />
      <div>
        {Object.entries(palette).map((color, i) => (
          <Grid gap={gap} key={i}>
            <Box
              backgroundColor="white"
              boxShadow="box.shallow"
              mb={gap}
              p={gap}
              width="100%"
              centered
            >
              <Text variant="eyebrow">{color[0]}</Text>
            </Box>
            {Object.values(color[1]).map((shade, i) => (
              <Box
                backgroundColor={shade as string}
                boxShadow="box.shallow"
                minHeight={80}
                padding="thin"
                mb={gap}
                key={i}
                centered
              >
                <Box
                  backgroundColor="background.dark"
                  color="background.light"
                  boxShadow="box.shallow"
                  p={2}
                >
                  <Text variant="label">{(shade as string).toUpperCase()}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        ))}
      </div>
    </Box>
  </>
);

const Headers: React.FC = () => (
  <Grid gap={gap} pb={gap}>
    <div aria-hidden />
    {Object.keys(palette.reds).map((color, i) => (
      <Box
        boxShadow="box.shallow"
        backgroundColor="white"
        key={i}
        p={4}
        centered
      >
        <Text variant="eyebrow">{color}</Text>
      </Box>
    ))}
  </Grid>
);
