import React from "react";
import { Text, Card, Box, Image, Heading, Flex } from "theme-ui";
import { CardProps as CardPropsThemeUI } from "theme-ui";
import {
  HeaderProps,
  BodyProps,
  BodyTextProps,
  ToggleProps,
  FooterProps,
  FooterTextProps,
  CardProps,
} from "../interfaces/cards";

const Dialog = ({ children, variant }: CardProps, props: CardPropsThemeUI) => (
  <Card variant={variant} {...props}>
    {children}
  </Card>
);

const Header = ({ children }: HeaderProps) => {
  return <header>{children}</header>;
};

const Body = ({ children }: BodyProps) => <Flex>{children}</Flex>;

const BodyText = ({ toggle, children }: BodyTextProps) => (
  <Box className="bodyText">
    <Text as={"p"} variant="caption.quicksand" className={toggle ? "hide" : ""}>
      {children}
    </Text>
  </Box>
);

const Toggle = ({ toggle, onClick }: ToggleProps) => (
  <Box className="toggle" onClick={onClick}>
    <Box className={toggle ? "arrowDown" : "arrowUp"} />
  </Box>
);

const Footer = ({ toggle, children }: FooterProps) => (
  <>{toggle ? null : <Box className="footerCard">{children}</Box>}</>
);

const FooterText = ({ children }: FooterTextProps) => (
  <Text as={"p"} variant="caption.quicksand">
    {children}
  </Text>
);

const CardExpSet = {
  Toggle,
  BodyText,
  Dialog,
  Header,
  Body,
  Footer,
  FooterText,
};

export default CardExpSet;
