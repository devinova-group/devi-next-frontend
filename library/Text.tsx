import React from "react";
import {Text as TextThemeUi} from "theme-ui";
import {TextProps as TextPropsThemeUi} from "theme-ui";
import {textVariants, variantMapping} from "../interfaces/types";

export interface TextProps extends TextPropsThemeUi {
  variant?: textVariants;
}
const Text = (props: TextProps) => {
  let Tag: React.ElementType = "span";
  if (variantMapping[props.variant as keyof typeof variantMapping]) {
    let element = variantMapping[props.variant as keyof typeof variantMapping];
    Tag = element as React.ElementType;
  }
  return (
    <TextThemeUi
      {...props}
      variant={`${props.variant ?? "Body1"}`}
      as={Tag}
    ></TextThemeUi>
  );
};
export default Text;
