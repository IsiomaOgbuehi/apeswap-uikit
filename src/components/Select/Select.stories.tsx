import React, { useState } from "react";
import { Text } from "../Text";
import Select from "./Select";
import SelectItem from "./SelectItem";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "select" },
    },
    position: {
      control: { type: "select" },
    },
  },
};

export const Default = (args) => {
  const [active, setActive] = useState(0);

  return (
    <StorybookLayout {...args}>
      <Select active={active} {...args}>
        <SelectItem value={0} onClick={setActive} {...args}>
          <Text sx={{ color: "brown" }}>Item 1 Selected link</Text>
        </SelectItem>
        <SelectItem value={1} onClick={setActive} {...args}>
          <Text sx={{ color: "brown" }}>Item 2</Text>
        </SelectItem>
      </Select>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  size: "md",
};
