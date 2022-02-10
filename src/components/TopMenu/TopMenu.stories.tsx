import React, { useState } from "react";
import TopMenu from "./TopMenu";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { icons } from "../IconSVG/types";

export default {
  title: "Components/TopMenu",
  component: TopMenu,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const networks = [
  {
    name: "Polygon",
    icon: icons.POLYGON,
    chainId: 3232,
  },
  {
    name: "BSC",
    icon: icons.BSC,
    chainId: 4343,
  },
];

export const Default = (args: any) => {
  const [active, setActive] = useState(4343);
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => setCollapse(!collapse);
  return (
    <StorybookLayout {...args}>
      <TopMenu
        networks={networks}
        activeNetwork={active}
        setActiveNetwork={setActive}
        profileLink="apeswap.finance/nft"
        collapse={collapse}
        handleCollapse={handleCollapse}
        {...args}
      />
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  hideLogo: false,
};
