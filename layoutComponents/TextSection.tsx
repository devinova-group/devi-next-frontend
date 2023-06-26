import React from "react";
import Flex from "@/library/Flex";
import Text from "@/library/Text";
import Image from "@/library/Image";
import { TextSectionProps } from "@/interfaces/compTypes";
import { useColorMode } from "theme-ui";

function TextSection({ component }: TextSectionProps) {
  const [colorMode] = useColorMode();
  const title = component?.titleTextSection;
  const paragraph = component?.paragraphTextSection;
  const imagePosition = component.imgTextSection?.imagesPosition;
  const imageUrl = component.imgTextSection?.image.data?.attributes.url;
  const imageWidth = component.imgTextSection?.width;
  const imageHeight = component.imgTextSection?.height;
  const imageAlt = component.imgTextSection?.altText;

  const bgLignt = component.bgTextSection?.lightBackground.data?.attributes.url;
  const bgDark = component.bgTextSection?.darkBackground.data?.attributes.url;

  const image = imageUrl && (
    <Image
      sx={{
        margin: "30px 0px",
        maxWidth: ["90%", `${imageWidth}`],
        height: `${imageHeight ? imageHeight : "auto"}`,
      }}
      src={imageUrl}
      alt={imageAlt}
    />
  );
  const mode =
    colorMode === "light"
      ? `url(${bgLignt}) center repeat`
      : `url(${bgDark}) center repeat`;
  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        background: `${bgLignt ? `${mode}` : "services.background"}`,
      }}
    >
      <Flex
        sx={{
          minWidth: "100%",
          minHeight: "600px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: ["column", "row"],
          gap: ["5%", "5%"],
        }}
      >
        {imagePosition === "left" && image}
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {imagePosition === "top" && image}
          {title && (
            <Text
              variant={title.variant}
              sx={{
                color: "services.invert",
                fontFamily: "Quicksand",
                fontSize: 6,
                alignSelf: [
                  "center",
                  `
              ${
                imagePosition === ("left" || "right")
                  ? `${title.position}`
                  : "start"
              }`,
                ],
              }}
            >
              {title.body}
            </Text>
          )}
          {paragraph && (
            <Text
              variant={paragraph.variant}
              sx={{
                width: ["90%", "500px"],
                marginTop: 12,
                color: "services.invert",
                fontSize: [2, 3],
                alignSelf: [
                  "center",
                  `
              ${
                imagePosition === ("left" || "right")
                  ? `${paragraph.position}`
                  : "start"
              }`,
                ],
                textAlign: [
                  "center",
                  `${paragraph ? paragraph.position : "center"}`,
                ],
              }}
            >
              {paragraph.body}
            </Text>
          )}
          {imagePosition === "bottom" && image}
        </Flex>
        {imagePosition === "right" && image}
      </Flex>
    </Flex>
  );
}
export default TextSection;
