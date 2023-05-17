import React from "react";
import Navbar from "@/library/Navbar/Navbar";
import Nav from "@/library/Navbar/Nav";
import DesignatorNav from "./DesignatorNav";




const Navigation = ({nav}:any) => {
  return (
  <Navbar>
  <Navbar.Brand href={nav.logo.link} 
  logoDesktopLight={nav.logo.logoDesktopLight.data.attributes.url}
  logoDesktopDark={nav.logo.logoDesktopDark.data.attributes.url}
  logoMobileLight={nav.logo.logoMobileLight.data.attributes.url}
  logoMobileDark={nav.logo.logoMobileDark.data.attributes.url}/>
  <Navbar.Collapse>
      <Nav> 
        {nav.navbar.map((item:any, i:number)=> {
      return    <DesignatorNav key={i} comps={item} /> 
      })}
      </Nav>
      </Navbar.Collapse>
      </Navbar> 
    /*   <Navbar>
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
