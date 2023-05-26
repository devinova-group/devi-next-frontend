import React from "react";
import { Flex as FlexThemeUi } from "theme-ui";
import { FlexProps as ThemeUIFlexOwnProps } from "theme-ui";

const Flex = (props: ThemeUIFlexOwnProps) => (
  <FlexThemeUi {...props}></FlexThemeUi>
);

export default Flex;
