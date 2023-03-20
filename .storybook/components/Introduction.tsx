import React from "react";
import { Box, Grid, Text } from "~ui/primitives";

type Props = {
  title: string;
  description: string | string[];
};

const Introduction: React.FC<Props> = ({ title, description }) => {
  const updatedDescription =
    typeof description === "string" ? [description] : description;

  return (
    <Box mb={8} sx={{ maxWidth: "580px" }}>
      <Text as="h1" variant="title" mb={8}>
        {title}
      </Text>
      <Grid variant="stacked" gap={4}>
        {updatedDescription.map((p, i) => (
          <Text as="h2" variant="paragraph" isMarkdown key={i}>
            {p}
          </Text>
        ))}
      </Grid>
    </Box>
  );
};
export default Introduction;
