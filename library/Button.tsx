import React from "react";
import {Button as ButtonThemeUi} from "theme-ui";
import {ButtonProps as ThemeUIButtonProps} from "theme-ui";
import {buttonColors, colorMapping} from "../interfaces/types";

export interface ButtonProps extends ThemeUIButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "default" | "outlined" | "text";
  colorVariant?: buttonColors;
}
/**
 * - style: To edit styling of button
 * - variant: "default" | "outlined" | "text"
 * - size: "small" | "medium" | "large"
 * - colorVariant: "primary" | "secondary" | "success" | "error" | "warning" | "notification" | "information"
 */
const Button = (props: ButtonProps) => {
  let color = "primary.0";
  if (colorMapping[props.colorVariant as keyof typeof colorMapping]) {
    let background =
      colorMapping[props.colorVariant as keyof typeof colorMapping];
    color = background;
  }
  let background = {};
  switch (props.variant) {
    case "default":
      background = {
        backgroundColor: color,
        borderColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: color,
          color: color,
        },
      };
      break;
    case "outlined":
      background = {
        backgroundColor: "transparent",
        borderColor: color,
        color: color,
        "&:hover": {
          backgroundColor: color,
          borderColor: color,
          color: "buttonText",
        },
      };
      break;
    case "text":
      background = {
        color: color,
        backgroundColor: "transparent",
        borderColor: "transparent",
      };
      break;

    default:
      background = {
        backgroundColor: color,
        borderColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: color,
          color: color,
        },
      };
      break;
  }
  let size = {};
  switch (props.size) {
    case "large":
      size = {minWidth: "220px", minHeight: "60px", fontSize: 4};
      break;
    case "medium":
      size = {minWidth: "150px", minHeight: "50px", fontSize: 3};
      break;
    case "small":
      size = {minWidth: "114px", minHeight: "38px", fontSize: 2};
      break;
    default:
      size = {minWidth: "220px", minHeight: "60px", fontSize: 4};
      break;
  }

  const buttonCSS = {
    ...background,
    ...size,
  };
  return (
    <ButtonThemeUi
      {...props}
      variant={`${props.variant ?? "default"}`}
      sx={buttonCSS}
    />
  );
};

export default Button;
