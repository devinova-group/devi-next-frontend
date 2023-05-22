import Nav from "@/library/Navbar/Nav";
import NavDropDown from "@/library/Navbar/NavDropDown";

const DesignatorNav = ({ nav }: any) => {
  let section = <></>;
  switch (nav.__typename) {
    case "ComponentComponentLink":
      section = <Nav.Link href={nav.href}>{nav.label}</Nav.Link>;
      break;
    case "ComponentComponentDropDown":
      section = (
        <NavDropDown title={nav.labeldropdown}>
          {nav.link.map((item: any, i: number) => (
            <NavDropDown.Item key={i} href={item.href}>
              {item.label}
            </NavDropDown.Item>
          ))}
        </NavDropDown>
      );
      break;

    default:
      break;
  }

  return section;
};

export default DesignatorNav;
