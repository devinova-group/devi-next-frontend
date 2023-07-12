import React from "react";
import { useState } from "react";
import { useColorMode } from "theme-ui";
import {
  BrandProps,
  CollapseProps,
  NavbarProps,
} from "@/interfaces/compInterfaces";
/* Library */
import Box from "../Box";
import Flex from "../Flex";
import Link from "../Link";

/* SVG */
import Hamburger from "..//../assets/Hamburger.svg";
import Close from "..//../assets/x-close.svg";
import DarkMode from "..//../assets/DarkMode.svg";
import LightMode from "..//../assets/LightMode.svg";
import Image from "../Image";

const Navbar = ({ children }: NavbarProps) => {
  return (
    <Flex
      sx={{
        position: ["fixed", "relative"],
        width: "100%",
        height: ["5rem", "7rem"],
        gap: "30px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "services.background",
        zIndex: 10,
      }}
    >
      {children}
    </Flex>
  );
};

const Brand = ({
  href,
  children,
  logoDesktopLight,
  logoDesktopDark,
  logoMobileLight,
  logoMobileDark,
  imgAltText,
}: BrandProps) => {
  const [colorMode] = useColorMode();
  return (
    <Link
      href={href}
      sx={{
        display: ["flex", "flex"],
        float: "left",
        alignItems: "center",
        height: "100%",
        marginLeft: "30px",
        zIndex: 4,
        "img:nth-of-type(1)": {
          display: ["flex", "none"],
        },
        "img:nth-of-type(2)": {
          display: ["none", "flex"],
        },
      }}
    >
      <Image
        alt={imgAltText && imgAltText}
        src={colorMode === "light" ? logoMobileDark : logoMobileLight}
      />
      <Image
        alt={imgAltText && imgAltText}
        src={colorMode === "light" ? logoDesktopDark : logoDesktopLight}
      />
      {children}
    </Link>
  );
};

const Collapse = ({ children }: CollapseProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <Box
        sx={{
          display: "contents",
          marginTop: "2.5rem",
          "@media screen and (max-width: 72em)": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
      <Flex
        sx={{
          display: "flex",
          zIndex: 2,
          alignItems: "center",
          height: "30px",
          cursor: "pointer",
          marginRight: "20px",
          "@media screen and (min-width: 72em)": {
            display: "none",
          },
        }}
      >
        <Box sx={{ zIndex: 2 }}>
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
        <Box
          sx={{
            height: "30px",
            marginLeft: "20px",
            cursor: "pointer",
            zIndex: 2,
            svg: {
              ":nth-of-type(1)": {
                fill: "services.invert",
              },
            },
            "@media screen and (min-width: 72em)": {
              display: "none",
            },
          }}
        >
          {!menuOpen ? (
            <Hamburger onClick={() => setMenuOpen(true)} />
          ) : (
            <Close onClick={() => setMenuOpen(false)} />
          )}
        </Box>
        {menuOpen && (
          <Flex
            sx={{
              position: "fixed",
              top: -10,
              right: 0,
              flexDirection: "column",
              width: "100%",
              height: "100%",
              gap: "30px",
              background: "services.background",
              alignText: "left",
              zIndex: 1,
              marginTop: "100px",
            }}
          >
            {children}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Object.assign(Navbar, { Brand, Collapse });
