import Hero from "./Hero";
import TextBanner from "./TextBanner";
import TextHeader from "./TextHeader";

const Designator = ({ component }: any) => {
  let section = <></>;

  switch (component.__typename) {
    case "ComponentBlocksBanner":
      section = <TextBanner banner={component} />;
      break;

    case "ComponentBlocksTextHeader":
      section = <TextHeader textHeader={component} />;
      break;

    case "ComponentBlocksHeroBanner":
      section = <Hero hero={component} />;
      break;
    /*  case "ComponentComponentLink":
      section = <Navigation navigation={component} />;
      break; */

    default:
      break;
  }

  return section;
};

export default Designator;
