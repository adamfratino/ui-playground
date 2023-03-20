import { Button, ButtonProps } from "~ui/primitives";

type FilterButtonProps = {
  text: string;
  bg: string;
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
  bg,
  onClick,
  isDisabled,
}) => (
  <Button
    variant="filter"
    bg={bg}
    onClick={onClick}
    sx={{ filter: isDisabled ? "brightness(0.7)" : undefined }}
  >
    {text}
  </Button>
);

export default FilterButton;
