import { Text } from "~ui/primitives";

type Props = {
  title: string;
  count?: number;
};

const FiltersTitle: React.FC<Props> = ({ title, count }) => (
  <Text as="h2" variant="eyebrow">
    {title} [{count ?? count}]:
  </Text>
);

export default FiltersTitle;
