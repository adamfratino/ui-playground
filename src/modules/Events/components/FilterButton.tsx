import { Button } from "~ui/primitives";

type FilterButtonProps = {
  text: string;
  backgroundColor: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

/**
 * @todo possibly replace filter with theme-ui color utils, or look into polished?
 * @see https://theme-ui.com/packages/color
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
