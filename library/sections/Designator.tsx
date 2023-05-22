import TextBanner from "@/components/TextBanner";
import FeaturesSection from "./Features";
import HeroSection from "./HeroSection";
import Section from "./Section";
import TextHeader from "@/components/TextHeader";
import Hero from "@/components/Hero";

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

    case "ComponentBlocksBanner":
      section = <TextBanner banner={component} />;
      break;

    case "ComponentBlocksTextHeader":
      section = <TextHeader textHeader={component} />;
      break;

    case "ComponentBlocksHeroBanner":
      section = <Hero hero={component} />;
      break;

    default:
      break;
  }
  return section;
};

export default Designator;
