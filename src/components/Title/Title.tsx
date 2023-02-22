import { Text, Line } from "~ui/primitives";

type Props = {
  children?: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => (
  <>
    <Text variant="title" as="h1">
      {children}
    </Text>
    <Line
      height={1}
      backgroundColor="background.dark"
      boxShadow="box.shallow"
      marginTop={7}
      marginBottom={9}
    />
  </>
);

export default Title;
