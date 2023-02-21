import { ThemeProvider } from "styled-components";
import theme from "~ui/theme";
import "~ui/global.css";

/**
 * @see https://jxnblk.com/blog/defining-component-apis-in-react/
 * @see https://github.com/styled-components/styled-components/releases/tag/v5.1.0
 * @see https://github.com/storybookjs/storybook/issues/17831
 * @see https://github.com/storybookjs/storybook/issues/19055
 */

export const parameters = {
  options: {
    storySort: {
      order: [
        "UI",
        ["Tokens", ["Breakpoints", "Colors", "Typography"], "Primitives"],
        "App",
        ["Components", "Modules", "Pages"],
      ],
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
