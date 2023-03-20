export const box = {
  inset: `rgba(0, 0, 0, 0.24) 0px 3px 8px inset`,
  deep: `rgba(0, 0, 0, 0.48) 6px 2px 16px 0px, rgba(0, 0, 0, 0.8) -6px -2px 16px 0px`,
  overlap: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
  shallow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
};

export const text = {
  dark: `1px 1px 1px black`,
  medium: `1px 1px 1px rgba(0,0,0,50%)`,
  light: `1px 1px 1px white`,
};

const shadows = {
  box,
  text,
};

export default shadows;
