import { Meta, Story } from "@storybook/react";
import HomepageComponent from "./index";
import { pages } from "~storybook/configs";

export default {
  title: "App/Pages",
  parameters: { ...pages },
} as Meta;

export const Homepage = () => <HomepageComponent />;
