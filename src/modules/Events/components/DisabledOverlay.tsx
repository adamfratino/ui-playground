import { Box, Text } from "~ui/primitives";

const Disabled: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    backgroundColor="rgba(255,255,255,0.9)"
    boxShadow="box.inset"
    position="absolute"
    top="0px"
    left="0px"
    right="0px"
    bottom="0px"
    zIndex="1"
    centered
  >
    <Text as="span" variant="label" fontWeight="bold" fontSize={5}>
      {children}
    </Text>
  </Box>
);

export default Disabled;
