import { Meta } from "@storybook/react";
import React from "react";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";
import { fontSizes, condensed, mono, sans, serif } from "./typography";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

const families = [condensed, mono, sans, serif];
const characters = [alphabet, alphabet.toLowerCase(), numbers];

export default {
  title: "Tokens/Typography",
  parameters: { layout: "fullscreen" },
} as Meta;

// export const Typography: React.FC = () => (
//   <Box variant="outer" backgroundColor="backgroundColor.light" trimEdges>
//     {families.map((family, i) => (
//       <TypographyGrid font={family} key={i} />
//     ))}
//   </Box>
// );

// const TypographyGrid: React.FC<{ font: string }> = ({ font }) => (
//   <Box display="flex" flexDirection="column" pb={12}>
//     <Text fontFamily={sans} fontSize={14} fontWeight="normal" mb={2}>
//       {font};
//     </Text>
//     {characters.map((chars, i) => (
//       <Characters font={font} key={i}>
//         {chars}
//       </Characters>
//     ))}
//   </Box>
// );

// const Characters: React.FC<{ font: string; children: React.ReactNode }> = ({
//   font,
//   children,
// }) => (
//   <Text
//     variant="eyebrow"
//     as="span"
//     fontSize="64px"
//     fontFamily={font}
//     letterSpacing={1}
//     pb={2}
//   >
//     {children}
//   </Text>
// );
