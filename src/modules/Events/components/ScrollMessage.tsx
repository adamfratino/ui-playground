import { Box, Text } from "~ui/primitives";

/**
 * @todo add back to top link?
 * @todo reset with filter click (sometimes shows, sometimes doesn't)
 * */
const ScrollMessage: React.FC<{ atBottom?: boolean }> = ({ atBottom }) => (
  <Box
    backgroundColor="background.dark"
    color="background.light"
    padding="thin"
    isCentered
  >
    <Text as="span" variant="label">
      <em>
        ({atBottom ? "that's all of 'em!" : "keep scrolling for more matches!"})
      </em>
    </Text>
  </Box>
);

export default ScrollMessage;
