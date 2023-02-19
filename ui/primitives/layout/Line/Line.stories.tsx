import { Meta, Story } from "@storybook/react";
import LineComponent, { Props } from "./Line";

export default {
  title: "UI/Primitives/Layout",
  component: LineComponent,
  args: {
    height: 50,
  },
} as Meta;

const Template: Story<Props> = (args) => <LineComponent {...args} />;

export const Line = Template.bind({});
Line.args = {
  backgroundColor: "gold",
  marginY: 8,
  boxShadow: "box.shallow",
};
