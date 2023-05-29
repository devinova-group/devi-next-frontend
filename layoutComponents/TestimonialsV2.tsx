import React from "react";
import Flex from "@/library/Flex";
import Text from "@/library/Text";
import Image from "@/library/Image";
import { TestimonialsV2Props } from "@/interfaces/bannerTypes";
import QuoteS from "../assets/quote.svg";

function TestimonialsV2({ component }: TestimonialsV2Props) {
  const title = component?.titleV2;
  const paragraph = component?.paragraphV2;
  const imageUrl = component.imgV2?.image.data.attributes.url;
  const imagePosition = component.imgV2?.imagesPosition;
  const imageWidth = component.imgV2?.width;
  const imageHeight = component.imgV2?.height;
  const quoteSvg = component?.quote;
  const imageAlt = component.imgV2?.altText;

  const image = imageUrl && (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "services.background",
      }}
    >
      <Image
        sx={{
          width: `${imageWidth}`,
          height: `${imageHeight ? imageHeight : "auto"}`,
        }}
        src={`${imageUrl}`}
        alt={imageAlt}
      />
    </Flex>
  );
  return (
    <Flex
      sx={{
        width: "100%",
        height: "auto",
        flexDirection: ["column", "row"],
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "services.background",
        gap: "30px",
        padding: "100px",
      }}
    >
      {imagePosition === "left" && image}
      <Flex sx={{ flexDirection: "column", gap: "30px" }}>
        <Flex
          sx={{
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "services.background",
            svg: { fill: "services.invert" },
          }}
        >
          {imagePosition === "top" && image}
          {!imageUrl && quoteSvg && <QuoteS />}
          {paragraph && (
            <Text
              sx={{
                textAlign: `${paragraph.position}`,
                width: "386px",
              }}
            >
              {paragraph.body}
            </Text>
          )}
          {title && (
            <Text
              variant={title.variant}
              sx={{
                textAlign: `${title.position}`,
                width: "386px",
              }}
            >
              {title.body}
            </Text>
          )}
        </Flex>
        {imagePosition === "bottom" && image}
      </Flex>
      {imagePosition === "right" && image}
    </Flex>
  );
}

export default TestimonialsV2;
