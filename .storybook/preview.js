// .storybook/preview.js
// Globally in your .storybook/preview.js.
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    transformSource: (src, storyContext) => {
      try {
        const { template } = storyContext.storyFn(storyContext);
        return template;
      } catch (e) {
        return null;
      }
    },
  },
};
