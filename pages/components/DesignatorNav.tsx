import Nav from "@/library/Navbar/Nav";
import Hero from "./Hero";
import Navigation from "./Navigation";
import TextBanner from "./TextBanner";
import TextHeader from "./TextHeader";
import NavDropDown from "@/library/Navbar/NavDropDown";

const DesignatorNav = ({ comps }: any) => {
  let section = <></>;

  switch (comps.__typename) {
      case "ComponentComponentLink":
      section = <Nav.Link href={comps.href}>{comps.label}</Nav.Link>
      break;  
      case "ComponentComponentDropDown":
        section = (<NavDropDown title={comps.labeldropdown}>
        { comps.links.map((item:any, i:number)=> {
          return (<NavDropDown.Item key={i} href={item.href} >{item.label}</NavDropDown.Item>)
        })}
      </NavDropDown>)
        break;  
  
    default:
      break;
  }

  return section;
};

export default DesignatorNav;
