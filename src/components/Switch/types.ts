import { InputHTMLAttributes } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  labels: [string, string];
}
