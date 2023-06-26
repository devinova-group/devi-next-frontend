import React from "react";
import Flex from "@/library/Flex";
import Image from "@/library/Image";
import Text from "@/library/Text";
import Box from "@/library/Box";
import { TextBannerProps } from "@/interfaces/compTypes";

function TextBanner({ component }: TextBannerProps) {
  const title = component?.titleTextBanner;
  const gradient = component?.gradientTextBanner;
  const image = component.imgTextBanner?.image.data?.attributes.url;
  const imageMobile = component.imgTextBanner?.mobileImage.data?.attributes.url;
  const imageWidth = component.imgTextBanner?.width;
  const imageHeight = component.imgTextBanner?.height;
  const imageAlt = component.imgTextBanner?.altText;
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
          width: "100%",
          height: `${image && image! ? "auto" : "346px"}`,
          backgroundColor: `${
            (image && image) || imageMobile || gradient ? "" : "services.invert"
          }`,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `${
              (gradient === "gradientOne" &&
                `linear-gradient(92.89deg, rgba(96, 68, 181, 0.9) 0%, rgba(1, 147, 147, 0.9) 99.21%)`) ||
              (gradient === "gradientTwo" &&
                `linear-gradient(108.24deg, rgba(220, 170, 90, 0.35) -3.85%, rgba(96, 68, 181, 0.7) 102.74%)`)
            }`,
          }}
        />
        {image && (
          <Image
            sx={{
              display: ["none", "flex"],
              width: `${imageWidth}`,
              height: `${imageHeight ? imageHeight : "auto"}`,
            }}
            src={image}
            alt={imageAlt}
          />
        )}
        {imageMobile ? (
          <Image
            sx={{
              display: ["flex", "none"],
              width: `${imageWidth}`,
              height: `${imageHeight ? imageHeight : "auto"}`,
            }}
            src={imageMobile}
          />
        ) : (
          <Box
            sx={{
              display: ["", "none"],
              width: "100%",
              height: `${imageMobile! ? "auto" : "346px"}`,
              backgroundColor: `${gradient ? "" : "services.invert"}`,
            }}
          />
        )}

        {title ? (
          <Text
            variant={title.variant}
            sx={{
              position: "absolute",
              fontSize: [6, 9],
              fontFamily: "Quicksand",
              color: `${
                gradient || image || imageMobile
                  ? "white"
                  : "services.background"
              }`,
            }}
          >
            {title.body}
          </Text>
        ) : (
          <Box
            sx={{
              position: "absolute",
              fontFamily: "Quicksand",
            }}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default TextBanner;
