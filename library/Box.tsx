import React from "react";
import { Box as BoxThemeUi } from "theme-ui";
import { BoxProps as ThemeUIBoxOwnProps } from "theme-ui";

const Box = (props: ThemeUIBoxOwnProps) => <BoxThemeUi {...props}></BoxThemeUi>;

export default Box;
