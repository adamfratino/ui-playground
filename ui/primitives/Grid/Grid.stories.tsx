import { Meta, Story } from "@storybook/react";
import { colors } from "~ui/tokens";
import { Box } from "~ui/primitives";
import { variantArgTypes } from "~storybook/configs";
import GridComponent, { Props } from "./Grid";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  parameters: { layout: "fullscreen" },
  argTypes: {
    ...variantArgTypes(variants),
  },
} as Meta;

export const Grid: Story<Props & { columns: number; columnHeight: number }> = (
  args
) => (
  <GridComponent {...args}>
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
  </GridComponent>
);
Grid.args = {
  columns: 2,
};
