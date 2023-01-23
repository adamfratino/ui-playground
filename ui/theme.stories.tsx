import { Meta, Story } from "@storybook/react";
import styled from "styled-components";
import { Box } from "./primitives";
import { primaryFont } from "./tokens/typography";
import theme from "./theme";

const { breakpoints, colors, fontFamilies } = theme;

export default {
  title: "Theme Details",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
    previewTabs: { "storybook/docs/panel": { hidden: true } },
  },
} as Meta;

export const Breakpoints: Story = () => (
  <>
    <h1>Breakpoints:</h1>
    {Object.entries(breakpoints).map((bp, i) => (
      <StyledBox key={i} backgroundColor="primary" width={bp[1]}>
        {bp[0]}: {bp[1]}
      </StyledBox>
    ))}
  </>
);

export const Colors: Story = () => (
  <>
    <h1>Colors:</h1>
    {Object.entries(colors).map((color, i) => (
      <StyledBox key={i} backgroundColor={color[1]} width="100%">
        {color[0]}: {color[1]}
      </StyledBox>
    ))}
  </>
);

export const FontFamilies: Story = () => (
  <>
    <h1>Font Families:</h1>
    {Object.entries(fontFamilies).map((family, i) => (
      <StyledBox key={i}>
        {family[0]}:{" "}
        <Box fontFamily={family[1]} fontSize={18}>
          {family[1]}
        </Box>
      </StyledBox>
    ))}
  </>
);

const StyledBox = styled(Box)`
  font-family: ${primaryFont};
  font-size: 14px;
  white-space: nowrap;
  text-indent: 8px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: visible;
`;
