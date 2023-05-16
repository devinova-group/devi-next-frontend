import React from "react";
import { Link as LinkThemeUi } from "theme-ui";
import { LinkProps as ThemeUILinkOwnProps } from "theme-ui";

const Link = (props: ThemeUILinkOwnProps) => (
  <LinkThemeUi {...props}></LinkThemeUi>
);

export default Link;
