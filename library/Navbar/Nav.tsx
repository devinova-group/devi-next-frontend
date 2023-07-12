import React from "react";
import Box from "../Box";
import NavLink from "../NavLink";
import DarkMode from "..//../assets/DarkMode.svg";
import LightMode from "..//../assets/LightMode.svg";
import { useColorMode } from "theme-ui";
import { LinkProps, NavProps } from "@/interfaces/compInterfaces";

const Nav = ({ children }: NavProps) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box
      sx={{
        display: ["flex", "flex"],
        flexDirection: "row",
        alignItems: "center",
        float: "right",
        height: "100%",
        gap: "30px",
        marginRight: "30px",
        color: "services.invert",
        "@media screen and (max-width: 72em)": {
          alignItems: "revert",
          position: "fixed",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          gap: "10px",
          background: "services.background",
        },
      }}
    >
      {children}
      <Box sx={{ display: ["none", "none", "flex"], cursor: "pointer" }}>
        {colorMode === "light" ? (
          <DarkMode
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          />
        ) : (
          <LightMode
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          />
        )}
      </Box>
    </Box>
  );
};
const Link = ({ children, href }: LinkProps) => {
  return (
    <NavLink
      href={href}
      sx={{
        display: "flex",
        fontFamily: "Quicksand",
        fontWeight: 3,
        cursor: "pointer",
        boxSizing: "border-box",
        justifyContent: "space-between",
        borderBottom: "2px solid transparent",
        color: "services.invert",
        "&:hover": {
          color: "services.invert",
          borderColor: "#6044B5",
          boxSizing: "border-box",
        },
        "@media screen and (max-width: 72em)": {
          textAlign: "left",
          display: "flex",
          fontFamily: "Quicksand",
          fontSize: 4,
          fontWeight: 3,
          cursor: "pointer",
          color: "services.invert",
          alignItems: "center",
          paddingLeft: "2rem",
          background: "transparent",
          height: "3rem",
          "&:hover": {
            background: "linear-gradient(45deg, #6044B5, #EDF0F7);",
            height: "3rem",
            paddingLeft: "2rem",
            color: "#fff",
            boxSizing: "border-box",
            borderBottom: "0px",
          },
        },
      }}
    >
      {children}
    </NavLink>
  );
};

export default Object.assign(Nav, { Link });
