/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Switch from "./Switch";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Switch {...args} labels={["Switch1", "Switch2"]} onChange={() => {}} />
  </StorybookLayout>
);

Default.args = {
  checked: false,
  colorMode: "light",
};
