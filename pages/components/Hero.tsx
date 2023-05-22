import HeroBanner from "@/library/sections/HeroBanner";
import React from "react";

function Hero({ hero }: any) {
  return (
    <HeroBanner>
      <HeroBanner.Content
        title={hero.title}
        paragraph={hero.paragraphHero}
        imageUrl={hero.image.data.attributes.url}
        buttonTitle={hero.buttonTitle}
        layout={hero.layout}
        gradient={hero.gradientHero}
        imagePosition={hero.imagePosition}
      />
    </HeroBanner>
  );
}

export default Hero;
