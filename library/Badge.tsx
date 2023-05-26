import React from "react";
import { Badge as BadgeThemeUi } from "theme-ui";
import { BadgeProps as BadgePropsThemeUi } from "theme-ui";

export interface BadgeProps extends BadgePropsThemeUi {
  children?: string;
  variant?:
    | "inActive"
    | "error"
    | "disabled"
    | "active"
    | "default"
    | "primary"
    | "selected"
    | "secondary"
    | string;
}

const Badge = (props: BadgeProps) => (
  <BadgeThemeUi variant={props.variant}>{props.children}</BadgeThemeUi>
);

export default Badge;
