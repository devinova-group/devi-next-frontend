import React from "react";
import {Switch as SwitchThemeUi} from "theme-ui";
import {SwitchProps as SwitchPropsThemeUi} from "theme-ui";

export interface SwitchProps extends SwitchPropsThemeUi {
  variant?: "large" | "small" | "largeV1" | "smallV1" | "largeV2" | "smallV2";
}

const Switch = (props: SwitchProps) => (
  <SwitchThemeUi {...props} variant={`switchs.${props.variant ?? "large"}`} />
);

export default Switch;
