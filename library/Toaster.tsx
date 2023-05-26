import React from "react";
import { Box } from "theme-ui";
import { BoxProps as ToasterPropsThemeUI } from "theme-ui";

export interface ToasterProps extends ToasterPropsThemeUI {
  variant?:
    | "primaryV1"
    | "warningV1"
    | "errorV1"
    | "noticeV1"
    | "infoV1"
    | "noticeV2"
    | "primaryV2"
    | "warningV2"
    | "errorV2"
    | "infoV2";
  children?: any;
}

const Toaster = (props: ToasterProps) => (
  <Box variant={`toaster.${props.variant}`}>
    <Box className="toasterSvg" />
    {props.children}
    <Box className="toasterX" />
  </Box>
);

export default Toaster;
