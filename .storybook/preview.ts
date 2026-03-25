import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "bm-black",
      values: [
        { name: "bm-black", value: "#000000" },
        { name: "bm-dark-gray", value: "#2d2d2d" },
        { name: "bm-white", value: "#ffffff" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
