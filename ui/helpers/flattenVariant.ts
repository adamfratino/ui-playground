/**
 * @todo find someplace else to put this
 * @todo can we simplify the primitive `variants` prop to include this?
 * @todo figure out types
 */
const flattenVariant = (variant: {}, element: string) =>
  Object.entries(variant).reduce((acc, [key, value]) => {
    (acc as any)[key] = { ...(value as any)[element] };
    return acc;
  }, {});

export default flattenVariant;
