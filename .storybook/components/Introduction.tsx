import React from "react";
import { Box, Grid, Line, Text } from "~ui/primitives";

type Props = {
  title: string;
  description: string | string[];
};

const Introduction: React.FC<Props> = ({ title, description }) => (
  <>
    <Grid>
      <Box maxWidth="580px">
        <Text variant="title" mb={8}>
          {title}
        </Text>
        {typeof description === "string" ? (
          <Text variant="paragraph" markdown>
            {description}
          </Text>
        ) : (
          description.map((p, i) => (
            <Text
              variant="paragraph"
              markdown
              mb={(description.length - 1 > i && 2) as number}
              key={i}
            >
              {p}
            </Text>
          ))
        )}
      </Box>
    </Grid>
    <Line backgroundColor="greys.lightest" height={1} marginY={10} />
  </>
);
export default Introduction;
