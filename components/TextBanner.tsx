import TextSection from "@/library/sections/TextSection";
import React from "react";

function TextBanner({ banner }: any) {
  return (
    <TextSection>
      <TextSection.Banner
        title={banner.title}
        gradient={banner.gradient}
        image={banner.image.data.attributes.url}
        imageMobile={banner.imageMobile.data.attributes.url}
      ></TextSection.Banner>
    </TextSection>
  );
}

export default TextBanner;
