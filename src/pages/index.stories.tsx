import { Meta, Story } from "@storybook/react";
import { pages } from "~storybook/configs";
import { Box, Text } from "~ui/primitives";
import { MOCK_EVENTS } from "__mockData";
import HomepageComponent from "./index.page";

export default {
  title: "App/Pages",
  parameters: { ...pages },
  args: {
    events: MOCK_EVENTS,
  },
} as Meta;

export const Homepage: Story = (args) => (
  <>
    <Box backgroundColor="black" color="white" centered p="thin">
      <Text variant="label">Please note this story is using mock data!</Text>
    </Box>
    <HomepageComponent {...args} />
  </>
);
