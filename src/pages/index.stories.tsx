import { Meta } from "@storybook/react";
import HomepageComponent from "./index";
import { Navigation, Footer } from "~/modules";
import { pages } from "~storybook/configs";

export default {
  title: "App/Pages",
  parameters: { ...pages },
} as Meta;

export const Homepage = () => (
  <>
    <Navigation />
    <HomepageComponent />
    <Footer />
  </>
);
