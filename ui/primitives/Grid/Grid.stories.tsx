import { Meta, Story } from "@storybook/react";
import { Box } from "~ui/primitives";
import { colors } from "~ui/tokens";
import Grid, { Props } from "./Grid";

export default {
  title: "UI/Primitives/Grid",
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<Props & { columns: number; columnHeight: number }> = (
  args
) => (
  <Grid {...args}>
    {Array.from({ length: args.columns }).map((_, i) => {
      const backgroundColor = Object.values(colors.blues)[
        i % Object.values(colors.blues).length
      ] as string;
      return (
        <Box
          key={i}
          height="50vh"
          backgroundColor={backgroundColor}
          boxShadow="box.overlap"
        />
      );
    })}
  </Grid>
);

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  columns: 4,
};

export const Stacked = Template.bind({});
Stacked.args = {
  columns: 8,
  variant: "stacked",
};
