import { Text } from "~ui/primitives";

type Props = {
  children?: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => (
  <Text as="h1" variant="title">
    {children}
  </Text>
);

export default Title;
