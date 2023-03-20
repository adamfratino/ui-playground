import { Box, Grid, Text } from "~ui/primitives";

export type Props = {
  totalPlayers: number;
  playedThisMonth: number;
  playedLastMonth: number;
  openMatches: number;
  upcomingMatches: number;
  pastMatches: number;
};

/** @todo create List primitive? */
const ClubDetails: React.FC<Props> = ({
  totalPlayers,
  playedThisMonth,
  playedLastMonth,
  openMatches,
  upcomingMatches,
  pastMatches,
}) => (
  <Grid variant="stacked">
    <Grid variant="auto">
      <ul>
        <MatchItem label="Total Players" value={totalPlayers} />
        <MatchItem label="Played This Month" value={playedThisMonth} />
        <MatchItem label="Played Last Month" value={playedLastMonth} />
      </ul>
      <ul>
        <MatchItem label="Open Matches" value={openMatches} />
        <MatchItem label="Upcoming Matches" value={upcomingMatches} />
        <MatchItem label="Past Matches" value={pastMatches} />
      </ul>
    </Grid>
    <Grid variant="auto">
      <Box>
        <Text as="h3" variant="label" fontWeight="bold">
          Current Players of the Month
        </Text>
        <ol>
          <LeaderboardName>&quot;Stone Cold&quot; Steve Austin</LeaderboardName>
          <LeaderboardName>The Rock</LeaderboardName>
          <LeaderboardName>The Undertaker</LeaderboardName>
          <LeaderboardName>Triple H</LeaderboardName>
          <LeaderboardName>Kurt Angle</LeaderboardName>
        </ol>
      </Box>
      <Box>
        <Text as="h3" variant="label" fontWeight="bold">
          Current Players of the Year
        </Text>
        <ol>
          <LeaderboardName>Bret &quot;The Hitman&quot; Hart</LeaderboardName>
          <LeaderboardName>
            &quot;The Heartbreak Kid&quot; Shawn Michaels
          </LeaderboardName>
          <LeaderboardName>
            Ricky &quot;The Dragon&quot; Steamboat
          </LeaderboardName>
          <LeaderboardName>Jon Moxley</LeaderboardName>
          <LeaderboardName>Kenny Omega</LeaderboardName>
        </ol>
      </Box>
    </Grid>
  </Grid>
);

export default ClubDetails;

type MatchItemProps = {
  label: string;
  value: string | number;
};

const MatchItem: React.FC<MatchItemProps> = ({ label, value }) => (
  <Grid as="li" columns="160px 1fr">
    <Text as="h4" variant="label" fontWeight="bold">
      {label}:
    </Text>{" "}
    <Text as="h4" variant="label">
      {value}
    </Text>
  </Grid>
);

const LeaderboardName: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Text as="li" variant="label">
    {children}
  </Text>
);
