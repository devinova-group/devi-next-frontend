import React, { useState } from "react";
import { keyframes } from "@emotion/react";
/* Library */
import Text from "../Text";
import Box from "../Box";
import NavLink from "../NavLink";
/* SVG */
import ArrowUP from "..//../assets/arrow.svg";
import ArrowDown from "..//../assets/arrowDown.svg";
import Flex from "../Flex";

export interface NavDropDownProps {
  children?: React.ReactNode;
  title?: string;
}
export interface ItemProps {
  children?: React.ReactNode;
  href?: string;
}

const NavDropDown = ({ children, title }: NavDropDownProps) => {
  const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <Text
        sx={{
          display: ["flex", "flex", "none"],
          fontSize: 4,
          fontWeight: 3,
          alignItems: "center",
          paddingLeft: "2rem",
          background: "transparent",
          height: "3rem",
          textTransform: "uppercase",
          "&:hover": {
            background: "linear-gradient(45deg, #6044B5, #EDF0F7);",
            height: "3rem",
            paddingLeft: "2rem",
            color: "#fff",
            boxSizing: "border-box",
            borderBottom: "0px",
          },
        }}
        onClick={() => setDropDown(!dropDown)}
      >
        {title}
      </Text>
      <Box
        sx={{
          display: ["flex", "flex", "none"],
          position: "relative",
          svg: {
            position: "absolute",
            top: -12,
            left: 180,
            fill: "services.invert",
          },
        }}
      >
        {dropDown === false ? <ArrowUP /> : <ArrowDown />}
      </Box>
      <Flex
        sx={{
          display: `${dropDown ? ["flex"] : "none"}`,
          flexDirection: "column",
          margin: "0px",
          a: {
            paddingLeft: "60px",
            "&:hover": {
              paddingLeft: "60px",
            },
          },
        }}
      >
        {children}
      </Flex>

      <Box
        onMouseEnter={(e) => setOpen(!open)}
        onMouseLeave={(e) => setOpen(!open)}
        sx={{
          display: ["none", "none", "flex"],
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Text
          sx={{
            display: ["none", "none", "flex"],
            fontFamily: "Quicksand",
            fontWeight: 3,
            cursor: "pointer",
            boxSizing: "border-box",
            color: "services.invert",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Text>
        {open ? (
          <Box
            sx={{
              display: ["none", "flex"],
              marginLeft: "10px",
              width: "13px",
              svg: {
                ">path": {
                  fill: "services.invert",
                },
              },
            }}
          >
            <ArrowDown />
          </Box>
        ) : (
          <Box
            sx={{
              display: ["none", "flex"],
              alignItems: "center",
              marginLeft: "10px",
              width: "13px",
              svg: {
                ">path": {
                  fill: "services.invert",
                },
              },
            }}
          >
            <ArrowUP />
          </Box>
        )}
        {open && (
          <Box
            sx={{
              marginTop: "20px",
              position: "absolute",
              display: ["none", "flex"],
              flexDirection: "column",
              alignItems: "left",
              textAlign: "left",
              width: "12rem",
              borderRadius: "10px",
              boxShadow: "1px 1px 1px 0px black",
              backgroundColor: "services.background",
              animation: `${fadeIn} 0.5s backwards`,
              zIndex: 2,
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    </>
  );
};
const Item = ({ children, href }: ItemProps) => (
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
      padding: "10px",
      marginTop: "10px",
      "&:hover": {
        color: "#6044B5",
      },
      "@media screen and (max-width: 72em)": {
        fontSize: 4,
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
const Divider = () => (
  <Box
    sx={{
      borderTop: "1px solid black",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px 0px",
    }}
  />
);

export default Object.assign(NavDropDown, { Item, Divider });
