import { Text } from "~ui/primitives";

type Props = {
  children?: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => (
  <Text variant="title" as="h1">
    {children}
  </Text>
);

export default Title;
