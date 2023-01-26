import { ThemeProvider } from "styled-components";
import theme from "../ui/theme";

export const parameters = {
  options: {
    storySort: {
      order: ["Tokens", "Primitives", "Components", "Modules"],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
