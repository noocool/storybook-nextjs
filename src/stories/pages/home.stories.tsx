import { ComponentMeta } from "@storybook/react";
import Home from "pages/index";
import React from "react";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof React.Component>;

export const HomePage = ({ abc }: { abc?: string }) => (
  <code>{`<div>{abc && abc}</div>`}</code>
);
