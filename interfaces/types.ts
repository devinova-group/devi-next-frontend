export type textVariants =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "Subhead"
  | "Body1"
  | "Body2"
  | "Button"
  | "Caption"
  | "SmallCaption"
  | "Overline";

export type buttonColors =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "notification"
  | "information";

export const colorMapping = {
  primary: "primary.0",
  secondary: "secondary.0",
  success: "success.0",
  error: "error.0",
  warning: "warning.0",
  notification: "notification.0",
  information: "information.0",
};

export type positionVariants = "left" | "center" | "right";

export interface textComponent {
  title: string;
  position: positionVariants;
  variant: textVariants;
}

export type imagePosition = "right" | "left";

export type componentType = "main" | "services" | "contact";

type buttonVariant = "outlined" | "default" | "text";

type buttonSize = "small" | "medium" | "large";

type buttonColor = "primary" | "error" | "success";

type objfit = "none" | "contain" | "cover" | "fill" | "scale-down";

interface button {
  text: string;
  color: buttonColor;
  size: buttonSize;
  variant: buttonVariant;
}

export const variantMapping = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  Subhead: "h6",
  Body1: "p",
  Body2: "p",
  Button: "span",
  Caption: "span",
  SmallCaption: "span",
  Overline: "span",
};

export interface sectionTextProps {
  topsubheader?: textComponent;
  header?: textComponent;
  subheader?: textComponent;
  description?: textComponent;
  gap?: number;
}

export interface sectionButtonProps {
  buttons?: [button];
}

export interface sectionImgProps {
  img: {localFile: any};
  alternate: string;
  fit?: objfit;
}
