import { Button } from "~ui/primitives";

type FilterButtonProps = {
  text: string;
  backgroundColor: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

/**
 * @todo honestly just rip the bandaid off refactor theme ui (for polished with color tokens)
 * @update not sure what i mean about polished/color tokens but we're on theme-ui now...
 * */
const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  backgroundColor,
  onClick,
  isDisabled,
}) => (
  <Button
    variant="filter"
    backgroundColor={backgroundColor}
    onClick={onClick}
    sx={{
      filter: isDisabled ? "brightness(0.7)" : undefined,
    }}
  >
    {text}
  </Button>
);

export default FilterButton;
