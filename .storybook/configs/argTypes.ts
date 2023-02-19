import theme from "~ui/theme";

export const themeTypes = {
  boxShadow: {
    control: "select",
    options: theme.shadows.box,
    table: { category: "Theming" },
  },
  backgroundColor: {
    control: "select",
    options: theme.colors.background,
    table: { category: "Theming" },
  },
};
