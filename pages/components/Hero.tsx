import HeroBanner from "@/library/sections/HeroBanner";
import React from "react";

function Hero({ hero }: any) {
  return (
    <div>
      <HeroBanner>
        <HeroBanner.Content
          title={hero.title}
          paragraph={hero.paragraphHero}
          imageUrl={hero.image.data.attributes.url}
          buttonTitle={hero.buttonTitle}
          layout={hero.layout}
          gradient={hero.gradientHero}
          imagePosition={hero.imgPosition}
        />
      </HeroBanner>
    </div>
  );
}

export default Hero;
