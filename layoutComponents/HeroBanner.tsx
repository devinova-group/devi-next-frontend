import React from "react";
import { useColorMode } from "theme-ui";
import Flex from "@/library/Flex";
import Image from "@/library/Image";
import Text from "@/library/Text";
import Box from "@/library/Box";
import Button from "@/library/Button";
import { HeroBannerProps } from "@/interfaces/bannerTypes";

function HeroBanner({ component }: HeroBannerProps) {
  const [colorMode] = useColorMode();
  const title = component?.titleHeroBanner;
  const paragraph = component?.paragraphHeroBanner;
  const imageUrl = component.imgHeroBanner.image.data?.attributes.url;
  const button = component.buttonHeroBanner;
  const layout = component.layoutHeroBanner;
  const gradient = component.gradientHeroBanner;
  const imagePosition = component.imgHeroBanner.imagesPosition;
  const bgLignt = component.bgHeroBanner.lightBackground.data?.attributes.url;
  const bgDark = component.bgHeroBanner.darkBackground.data?.attributes.url;

  const image = imageUrl && <Image sx={{ margin: "30px" }} src={imageUrl} />;
  const mode =
    colorMode === "light"
      ? `url(${bgLignt}) no-repeat`
      : `url(${bgDark}) no-repeat`;
  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          minWidth: "100%",
          minHeight: ["650px", "410px"],
          justifyContent: "center",
          alignItems: "center",
          flexDirection: ["column", "row"],
          gap: ["5%", "220px"],
          background: `${
            gradient
              ? `linear-gradient(92.89deg, rgba(96, 68, 181, 0.9) 0%, rgba(1, 147, 147, 0.9) 99.21%)`
              : `${mode}`
          }`,
          backgroundSize: "cover",
          button: {
            justifyItems: "left",
            alignSelf: "left",
          },
        }}
      >
        {layout === "imageButton" && imagePosition === "left" && image}
        <Flex
          sx={{
            alignItems: "left",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Text
            variant={title.variant}
            sx={{
              fontFamily: "Quicksand",
              fontSize: [4, 6],
              color: `${gradient ? "white" : "services.invert"} `,
            }}
          >
            {title.body}
          </Text>
          <Text
            variant={paragraph.variant}
            sx={{
              width: ["272px", "500px"],
              fontSize: [2, 3],
              textAlign: `${paragraph.position}`,
              color: `${gradient ? "white" : "services.invert"} `,
            }}
          >
            {paragraph.body}
          </Text>
          <Box
            sx={{
              button: {
                fontSize: [3, 4],
              },
            }}
          >
            {layout === "imageButton" && (
              <Button
                variant={button.variant}
                color={button.color}
                size={button.size}
              >
                {button.text}
              </Button>
            )}
          </Box>
        </Flex>
        {layout === "actionButton" && (
          <Button
            variant={button.variant}
            color={button.color}
            size={button.size}
          >
            {button.text}
          </Button>
        )}
        {layout === "imageButton" && imagePosition === "right" && image}
      </Flex>
    </Flex>
  );
}
export default HeroBanner;
