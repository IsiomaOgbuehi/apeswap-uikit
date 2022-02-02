import { BoxProps } from "theme-ui";

export enum variants {
  DEFAULT = "default",
  TEXTONLY = "textOnly",
}

export type variantProps = `${variants}`;

export interface TooltipProps extends BoxProps {
  variant?: variantProps;
  maxWidth?: string;
  position?: "fixed" | "absolute";
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}
