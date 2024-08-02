import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import mockPluginAPI from "../mocks/PluginAPI";
import "./globalStyles.scss";

// Load the mock plugin API.
window["PluginApi"] = mockPluginAPI;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone5",
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
