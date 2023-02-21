import { Meta } from "@storybook/react";
import React from "react";
import { Introduction } from "~storybook/components";
import { tokens } from "~storybook/configs/parameters";
import { Box, Text } from "~ui/primitives";
import { condensed, mono, sans, serif } from "./typography";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

const families = { condensed, mono, sans, serif };
const characters = [alphabet, alphabet.toLowerCase(), numbers];

export default {
  title: "UI/Tokens/Typography",
  parameters: { ...tokens },
} as Meta;

export const Typography: React.FC = () => (
  <Box variant="outer" backgroundColor="background.light">
    <Introduction
      title="Typography"
      description="While the primary goal of typography is to **convey language**, elements of typography can also evoke **emotions** and illustrate the **sentiment of the brand**."
    />
    {Object.entries(families).map((family, i) => (
      <TypographyGrid font={family[1]} family={family[0]} key={i} />
    ))}
  </Box>
);

const TypographyGrid: React.FC<{ font: string; family: string }> = ({
  font,
  family,
}) => (
  <Box display="flex" flexDirection="column" pb={12}>
    <Text variant="eyebrow" fontSize={8} mb={2}>
      {family}
    </Text>
    <Text fontFamily={sans} fontSize={14} fontWeight="normal" mb={6}>
      <strong>font-family: </strong>
      {font};
    </Text>
    <Box display="grid" gridTemplateColumns="repeat(10, 1fr)">
      {characters.map((chars, i) => (
        <Characters font={font} key={i} chars={chars.split("")} />
      ))}
    </Box>
  </Box>
);

const Characters: React.FC<{ font: string; chars: string[] }> = ({
  font,
  chars,
}) => (
  <>
    {chars.map((char, i) => (
      <Box
        margin={2}
        boxShadow="box.shallow"
        backgroundColor="white"
        key={i}
        centered
        flex="1"
        minHeight="100px"
        minWidth="100px"
        alignSelf="start"
      >
        <Text fontFamily={font} fontSize="44px" fontWeight="bold">
          {char}
        </Text>
      </Box>
    ))}
  </>
);
