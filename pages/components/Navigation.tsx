import React from "react";
import { gql, useQuery } from "@apollo/client";
import Text from "@/library/Text";
import NavDropDown from "@/library/Navbar/NavDropDown";
import Navbar from "@/library/Navbar/Navbar";
import Nav from "@/library/Navbar/Nav";
/* Library */

const QUERY = gql`
  query GetNavbar {
    navigation {
      data {
        attributes {
          navbar {
            ... on ComponentComponentLink {
              label
              href
            }
            ... on ComponentComponentDropDown {
              labeldropdown
              links {
                label
                href
              }
            }
          }
          logo {
            link
            logoDesktopLight {
              data {
                attributes {
                  url
                }
              }
            }
            logoMobileLight {
              data {
                attributes {
                  url
                }
              }
            }
            logoDesktopDark {
              data {
                attributes {
                  url
                }
              }
            }
            logoMobileDark {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Navigation = (navigation: any) => {
  const { data, loading, error } = useQuery(QUERY);
  const navData = data?.navigation.data.attributes.navbar;
  const navLogo = data?.navigation.data.attributes.logo;

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  let getDropName = navData?.filter((link: any) => {
    return link.__typename === "ComponentComponentDropDown";
  });

  const max = (maxProp: any[]) => {
    return maxProp.map((item: any, i: number) => {
      return (
        <NavDropDown.Item key={i} href={item.href}>
          {item.label}
        </NavDropDown.Item>
      );
    });
  };
  console.log(navLogo.link);
  return (
    <>
      <Navbar>
        <Navbar.Brand
          href={navLogo.link}
          logoDesktopDark={navLogo.logoDesktopDark.data.attributes.url}
          logoMobileLight={navLogo.logoMobileLight.data.attributes.url}
          logoMobileDark={navLogo.logoMobileDark.data.attributes.url}
          logoDesktopLight={navLogo.logoDesktopLight.data.attributes.url}
        />
        <Navbar.Collapse>
          <Nav>
            {getDropName &&
              getDropName?.map((title: any, index: any) => (
                <NavDropDown key={index} title={title.labeldropdown}>
                  {max(title.links)}
                </NavDropDown>
              ))}
            {navData &&
              navData?.map((link: any, index: any) => (
                <Nav.Link key={index} href={link.href}>
                  {link.label}
                </Nav.Link>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
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
