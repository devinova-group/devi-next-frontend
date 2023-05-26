import React from "react";
import { Field as FieldThemeUi } from "theme-ui";
import { FieldOwnProps as FieldPropsTheme } from "theme-ui";
import { InputProps as InputPropsTheme } from "theme-ui";

export interface FieldProps extends InputPropsTheme, FieldPropsTheme {
  variant?: "text" | "textError" | "search";
}

const Field = (props: FieldProps) => (
  <FieldThemeUi {...props} variant={`field.${props.variant}`} />
);

export default Field;
