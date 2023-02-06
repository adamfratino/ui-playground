/**
 * @todo: refactor to be `parameters.ts`
 */

export const parameters = {
  tokens: {
    layout: "fullscreen",
    options: { showPanel: false },
    previewTabs: { "storybook/docs/panel": { hidden: true } },
    toolbar: {
      addons: { hidden: true },
      copy: { hidden: true },
      eject: { hidden: true },
      fullscreen: { hidden: true },
      remount: { hidden: true },
      title: { hidden: true },
      zoom: { hidden: true },
      disable: true,
    },
    backgrounds: {
      disable: true,
    },
  },
};
