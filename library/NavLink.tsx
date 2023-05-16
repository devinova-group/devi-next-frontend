import React from "react";
import { NavLink as NavLinkThemeUi } from "theme-ui";
import { NavLinkProps as ThemeUINavLinkOwnProps } from "theme-ui";

const NavLink = (props: ThemeUINavLinkOwnProps) => (
  <NavLinkThemeUi {...props}></NavLinkThemeUi>
);

export default NavLink;
