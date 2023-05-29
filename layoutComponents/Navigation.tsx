import React from "react";
import Navbar from "@/library/Navbar/Navbar";
import Nav from "@/library/Navbar/Nav";
import DesignatorNav from "./DesignatorNav";

const Navigation = ({ data }: any) => {
  const nav = data?.navigation.data.attributes;
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

    /*  Build Structure
    <Navbar>
        <Navbar.Brand href={"/"}>
          <LogoMobile />
          <LogoDesktop />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropDown title="DROPDOWN">
              <NavDropDown.Item href="/">Action</NavDropDown.Item>
              <NavDropDown.Item href="/">Another Action</NavDropDown.Item>
              <NavDropDown.Item href="/">Something</NavDropDown.Item>
              <NavDropDown.Divider />
              <NavDropDown.Item href="/">Seperated link</NavDropDown.Item>
            </NavDropDown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#home">Career</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */
  );
};

export default Navigation;
