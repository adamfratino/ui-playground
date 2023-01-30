import React from "react";
import { Box } from "~ui/primitives/layout";
import { Text } from "~ui/primitives/typography";

type Props = {
  title: string;
  description: string | string[];
};

const Introduction: React.FC<Props> = ({ title, description }) => (
  <Box maxWidth="560px" mb={12}>
    <Text variant="title" mb="superthick">
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
          mb={description.length - 1 > i && 2}
          key={i}
        >
          {p}
        </Text>
      ))
    )}
  </Box>
);
export default Introduction;
