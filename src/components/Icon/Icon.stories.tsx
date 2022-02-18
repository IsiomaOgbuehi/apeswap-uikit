import React from "react";
import Icon from "./Icon";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    icon: {
      control: { type: "select" },
    },
    direction: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Icon {...args} />
  </StorybookLayout>
);

Default.args = {
  icon: "eth_token",
  color: "brown",
  width: 40,
};
