import { Meta, Story } from "@storybook/react";
import HeroComponent from "./Hero";

export default {
  title: "App/Modules",
} as Meta;

export const Hero: Story = () => (
  <HeroComponent
    totalPlayers={4}
    playedThisMonth={3}
    playedLastMonth={2}
    openMatches={8}
    upcomingMatches={18}
    pastMatches={3}
  />
);
