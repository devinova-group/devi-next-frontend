import React from "react";
import { useState } from "react";
import { useColorMode } from "theme-ui";
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

export interface NavbarProps {
  children: React.ReactNode;
}
export interface BrandProps {
  href?: string;
  logoDesktopLight?: string;
  logoDesktopDark?: string;
  logoMobileLight?: string;
  logoMobileDark?: string;
  children?: React.ReactNode;
}
export interface CollapseProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "7rem",
        gap: "30px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "services.background",
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
      <Image src={colorMode === "light" ? logoMobileDark : logoMobileLight} />
      <Image src={colorMode === "light" ? logoDesktopDark : logoDesktopLight} />
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
          "@media screen and (max-width: 40em)": {
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
          "@media screen and (min-width: 40em)": {
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
            "@media screen and (min-width: 40em)": {
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
              top: 0,
              right: 0,
              flexDirection: "column",
              width: "100%",
              height: "100%",
              gap: "30px",
              background: "services.background",
              alignText: "left",
              zIndex: 1,
              "a:nth-of-type(1)": {
                marginTop: "100px",
              },
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
