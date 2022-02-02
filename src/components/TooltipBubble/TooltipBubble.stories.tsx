import React from "react";
import { Text, Box } from "theme-ui";
import TooltipBubble from "./TooltipBubble";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { LinkExternal } from "../Link";
import TooltipBody from "./TooltipBody";

export default {
  title: "Components/TooltipBubble",
  component: TooltipBubble,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const JustText = (args: any) => (
  <StorybookLayout {...args}>
    <TooltipBubble {...args} variant="textOnly" right={0}>
      <Text>Just Text. Variant 4</Text>
    </TooltipBubble>
  </StorybookLayout>
);

export const SingleText = (args: any) => (
  <StorybookLayout {...args}>
    <TooltipBubble {...args} bottom={10}>
      <Text>Just Text. Variant 3</Text>
      <Box mt="10px">
        <LinkExternal href="https://apeswap.finance" target="_blank">
          Urlhere
        </LinkExternal>
        <LinkExternal href="https://apeswap.finance" target="_blank">
          Urlhere
        </LinkExternal>
      </Box>
    </TooltipBubble>
  </StorybookLayout>
);

export const WithLinks = (args: any) => (
  <StorybookLayout {...args}>
    <TooltipBubble {...args} bottom={10} right={0}>
      <TooltipBody>
        <Text>Multiplier Var 2:</Text>
        <Text>X35</Text>
      </TooltipBody>
      <TooltipBody>
        <Text>Stake:</Text>
        <Text>BANANA-BNB LP</Text>
      </TooltipBody>
      <Box mt="10px">
        <LinkExternal href="https://google.com" target="_blank">
          Urlhere
        </LinkExternal>
        <LinkExternal href="https://google.com" target="_blank">
          Urlhere
        </LinkExternal>
      </Box>
    </TooltipBubble>
  </StorybookLayout>
);

export const WithoutLinks = (args: any) => (
  <StorybookLayout {...args}>
    <TooltipBubble {...args}>
      <TooltipBody>
        <Text>Multiplier Var 1:</Text>
        <Text>X35</Text>
      </TooltipBody>
      <TooltipBody>
        <Text>Stake:</Text>
        <Text>BANANA-BNB LP</Text>
      </TooltipBody>
    </TooltipBubble>
  </StorybookLayout>
);
