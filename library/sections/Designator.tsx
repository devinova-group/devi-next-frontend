import FeaturesSection from "./Features";
import HeroSection from "./HeroSection";
import Section from "./Section";

const Designator = ({ component }: any) => {
  let section = <></>;

  switch (component.__typename) {
    case "ComponentBlocksSection":
      section = <Section component={component} />;
      break;

    case "ComponentBlocksHeroHeader":
      section = <HeroSection component={component} />;
      break;

    case "ComponentBlocksFeatures":
      section = <FeaturesSection component={component} />;
      break;

    default:
      break;
  }
  return section;
};

export default Designator;
