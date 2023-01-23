import { Meta, Story } from "@storybook/react";
import { neutrals, rainbow, ColorsType } from "./colors";

export default {
  title: "Tokens/Colors",
  parameters: { layout: "fullscreen" },
} as Meta;

const ColorGrid: React.FC<{ spectrum: ColorsType }> = ({ spectrum }) => (
  <>
    {Object.entries(spectrum).map((color, i) => (
      <p key={i}>
        {color[0]}:{color[1]}
      </p>
    ))}
  </>
);

export const Rainbow: Story = () => <ColorGrid spectrum={rainbow} />;
export const Neutral: Story = () => <ColorGrid spectrum={neutrals} />;
