import React from "react";

export const StyleSCSS = () => (
  <code>{`
@tailwind base;
@tailwind components;
@tailwind utilities;
`}</code>
);

// Storybook code
import { ComponentMeta } from "@storybook/react";
export default {
  title: "Styles/StyleSCSS",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof React.Component>;
// Storybook code
