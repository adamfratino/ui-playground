import { Meta, Story } from "@storybook/react";
import { Box } from "~ui/primitives/layout";
import { colors } from "~ui/tokens";
import Grid, { Props } from "./Grid";

export default {
  title: "Primitives/Layout/Grid",
} as Meta;

const Template: Story<Props & { columns: number }> = (args) => (
  <Grid {...args}>
    {Array.from({ length: args.columns }).map((_, i) => {
      const backgroundColor = Object.values(colors.blues)[
        (i % Object.values(colors.blues).length) + 1
      ] as string;
      return <Box key={i} height={100} backgroundColor={backgroundColor} />;
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
