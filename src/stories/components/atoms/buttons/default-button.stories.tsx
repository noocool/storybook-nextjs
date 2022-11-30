import React from "react";


export const Button = () => <button>asdlfjas;ld</button>;

// Storybook code
import { ComponentMeta } from "@storybook/react";
export default {
  title: "Atoms/Button",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof React.Component>;
// Storybook code
