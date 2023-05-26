import TextBanner from "@/layoutComponents/TextBanner";
import FeaturesSection from "./Features";
import HeroSection from "./HeroSection";
import Section from "./Section";
import TextSection from "./TextSection";
import HeroBanner from "./HeroBanner";
import TestimonialsV1 from "./TestimonialsV1";
import TestimonialsV2 from "./TestimonialsV2";

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
      section = <TextBanner component={component} />;
      break;

    case "ComponentBlocksTextHeader":
      section = <TextSection component={component} />;
      break;

    case "ComponentBlocksHeroBanner":
      section = <HeroBanner component={component} />;
      break;

    case "ComponentBlocksTestimonialCompV1":
      section = <TestimonialsV1 component={component} />;
      break;

    case "ComponentBlocksTestimonialV2":
      section = <TestimonialsV2 component={component} />;
      break;

    default:
      break;
  }
  return section;
};

export default Designator;
