import { Button } from "~components";

type FilterButtonProps = {
  text: string;
  backgroundColor: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

/**@todo honestly just rip the bandaid off refactor theme ui (for polished with color tokens) */
const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  backgroundColor,
  onClick,
  isActive,
  isDisabled,
}) => (
  <Button
    variant="filter"
    backgroundColor={backgroundColor}
    onClick={onClick}
    filter={isDisabled ? "brightness(0.7)" : undefined}
  >
    {text}
  </Button>
);

export default FilterButton;
