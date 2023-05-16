import React from "react";
import { Grid as GridThemeUi } from "theme-ui";
import { GridProps as ThemeUIGridOwnProps } from "theme-ui";

const Grid = (props: ThemeUIGridOwnProps) => (
  <GridThemeUi {...props}></GridThemeUi>
);

export default Grid;
