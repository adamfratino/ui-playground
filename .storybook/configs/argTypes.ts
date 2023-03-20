export const variantArgTypes = (variant: {}) => ({
  variant: { control: { type: "select", options: Object.keys(variant) } },
});
