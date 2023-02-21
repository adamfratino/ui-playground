import { Meta, Story } from "@storybook/react";
import BoxComponent, { Props } from "./Box";
import { themeTypes, variantArgTypes } from "~storybook/configs";
import variants from "./variants";

export default {
  title: "UI/Primitives",
  component: BoxComponent,
  argTypes: {
    /** @todo clean all this up somewhere DRY */
    ...themeTypes,
    ...variantArgTypes(variants),
    as: { table: { disable: true } },
    trimEdges: { control: { type: "boolean" } },
  },
  args: {
    backgroundColor: "text.body.light",
    boxShadow: "box.shallow",
    width: 300,
    height: 300,
  },
} as Meta;

const Template: Story<Props> = (args) => <BoxComponent {...args} />;

export const Box = Template.bind({});
