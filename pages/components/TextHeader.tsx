import TextSection from "@/library/sections/TextSection";
import React from "react";

function TextHeader({ textHeader }: any) {
  return (
    <TextSection.TextHeader
      title={textHeader.title}
      paragraph={textHeader.paragraph}
      imagePosition={textHeader.imagePosition}
      imageUrl={textHeader.image.data.attributes.url}
    ></TextSection.TextHeader>
  );
}

export default TextHeader;
