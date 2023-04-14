import React from "react";
import { Box } from "theme-ui";
import ReactDOM from "react-dom";
import {
  DialogProps,
  HeaderProps,
  BodyProps,
  FooterProps,
} from "../interfaces/modals";

const Dialog = ({ children, size }: DialogProps) => {
  return ReactDOM.createPortal(
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#0009",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box variant={`modal.${size}`}>{children}</Box>
    </Box>,
    document.getElementById("portal")!
  );
};

const Header = ({ children }: HeaderProps) => <header>{children}</header>;

const Body = ({ children }: BodyProps) => <main>{children}</main>;

const Footer = ({ children }: FooterProps) => <footer>{children}</footer>;

const Modals = { Dialog, Header, Body, Footer };

export default Modals;
