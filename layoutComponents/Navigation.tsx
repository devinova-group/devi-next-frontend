import React from "react";
import Navbar from "@/library/Navbar/Navbar";
import Nav from "@/library/Navbar/Nav";
import DesignatorNav from "./DesignatorNav";

const Navigation = ({ data }: any) => {
  const nav = data?.navigation?.data?.attributes;
  const logoDesktopLight = nav?.logo?.logoDesktopLight.data?.attributes.url;
  const logoDesktopDark = nav?.logo?.logoDesktopDark.data?.attributes.url;
  const logoMobileLight = nav?.logo?.logoMobileLight.data?.attributes.url;
  const logoMobileDark = nav?.logo?.logoMobileDark.data?.attributes.url;
  const link = nav?.logo?.link;
  return (
    <Navbar>
      {nav && (
        <Navbar.Brand
          href={link}
          logoDesktopLight={logoDesktopLight}
          logoDesktopDark={logoDesktopDark}
          logoMobileLight={logoMobileLight}
          logoMobileDark={logoMobileDark}
        />
      )}
      <Navbar.Collapse>
        <Nav>
          {nav &&
            nav.navbar.map((item: any, i: number) => {
              return <DesignatorNav key={i} nav={item} />;
            })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
