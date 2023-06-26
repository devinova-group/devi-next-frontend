import Box from "@/library/Box";
import Flex from "@/library/Flex";
import Link from "@/library/Link";
import Text from "@/library/Text";
import React, { useState } from "react";
import { useColorMode } from "theme-ui";
import DarkMode from "../assets/DarkMode.svg";
import LightMode from "../assets/LightMode.svg";
import Hamburger from "../assets/Hamburger.svg";
import Close from "../assets/x-close.svg";
function NavTest() {
  const [colorMode, setColorMode] = useColorMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleClick = (e: any) => {
    setDropDown((e) => !e);
  };
  const themeMode = (
    <Box sx={{ cursor: "pointer" }}>
      {colorMode === "light" ? (
        <DarkMode
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        />
      ) : (
        <LightMode
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        />
      )}
    </Box>
  );
  return (
    <>
      <Flex
        sx={{
          width: "100%",
          height: "7rem",
          gap: "30px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "services.invert",
        }}
      >
        <Text sx={{ color: "services.background" }}>LOGO</Text>
        <Box
          sx={{
            display: ["none", "flex"],
            fontFamily: "Quicksand",
            fontWeight: 3,
            cursor: "pointer",
            boxSizing: "border-box",
            /* justifyContent: "space-between", */
            alignItems: "center",
            color: "services.background",
            a: {
              /*  width: "100px", */
              margin: "10px",
              borderBottom: "2px solid transparent",
              "&:hover": {
                color: "services.background",
                borderColor: "#6044B5",
                boxSizing: "border-box",
              },
            },

            /* "@media screen and (min-width: 40em)": {
            textAlign: "left",
            display: "flex",
            fontFamily: "Quicksand",
            fontSize: 4,
            fontWeight: 3,
            cursor: "pointer",
            color: "services.background",
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
          }, */
          }}
        >
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link></Link>
          {themeMode}
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
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            height: "30px",
            marginLeft: "20px",
            cursor: "pointer",
            zIndex: 2,
            svg: {
              ":nth-of-type(1)": {
                fill: "services.background",
              },
            },
            "@media screen and (min-width: 40em)": {
              display: "none",
            },
          }}
        >
          {!menuOpen && <Hamburger onClick={() => setMenuOpen(true)} />}
        </Box>
      </Flex>{" "}
      {menuOpen && (
        <Flex
          sx={{
            display: ["flex", "none"],
            position: "fixed",
            top: 0,
            right: 0,
            flexDirection: "column",

            width: "100%",
            height: "100%",
            gap: "30px",
            background: "services.invert",
            alignText: "left",
            zIndex: 1,
            a: {
              color: "services.background",
              textAlign: "left",
              display: "flex",
              fontFamily: "Quicksand",
              fontSize: 4,
              fontWeight: 3,
              cursor: "pointer",

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
            overflow: "hidden",
            "a:nth-of-type(1)": {
              /*   marginTop: "100px", */
            },
            svg: {
              alignSelf: "end",
              margin: "30px",
              cursor: "pointer",
            },
          }}
        >
          <Close onClick={() => setMenuOpen(false)} />
          <Link>Home</Link>
          <Link>About</Link>
          <Link onClick={(e) => handleClick(e)}>Contact</Link>
          <Link>Contact</Link>

          <Box
            onClick={(e) => handleClick(e)}
            sx={{
              display: `${dropDown ? "flex" : "none"}`,
              flexDirection: "column",
            }}
          >
            <Link>About</Link>
            <Link>Contact</Link>
          </Box>
          <Link>YES</Link>
        </Flex>
      )}
    </>
  );
}

export default NavTest;
