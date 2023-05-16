import { CardProps as CardPropsThemeUI } from "theme-ui";

export interface CardProps extends CardPropsThemeUI {
  variant?: "primary" | "expandable" | "onlyText" | "noImg";
  children?: React.ReactNode;
}
export interface HeaderProps {
  children?: React.ReactNode;
}

export interface BodyProps {
  children?: React.ReactNode;
}
export interface BodyTextProps {
  children?: React.ReactNode;
  toggle?: boolean;
}
export interface ToggleProps {
  toggle?: boolean;
  onClick?: () => void;
}

export interface FooterProps {
  children?: React.ReactNode;
  toggle?: boolean;
}
export interface FooterTextProps {
  children?: React.ReactNode;
}
