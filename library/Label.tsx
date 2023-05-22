import React from "react";
import { Label as LabelThemeUi } from "theme-ui";
import { LabelProps as ThemeUILabelOwnProps } from "theme-ui";

const Label = (props: ThemeUILabelOwnProps) => (
  <LabelThemeUi {...props}></LabelThemeUi>
);

export default Label;
