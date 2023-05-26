import Flex from "@/library/Flex";
import Grid from "@/library/Grid";
import Text from "@/library/Text";
import React from "react";
import Image from "@/library/Image";
import { TestimonialsV1Props } from "@/interfaces/bannerTypes";
import Box from "@/library/Box";

function TestimonialsV1({ component }: TestimonialsV1Props) {
  const title = component?.titleV1;
  const subhead = component?.subheadV1;
  const paragraph = component?.paragraphV1;
  const imageUrl = component.imgV1.image.data?.attributes.url;
  const imagePosition = component.imgV1?.imagesPosition;
  const imageWidth = component.imgV1?.width;
  const imageHeight = component.imgV1?.height;
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
      />
    </Flex>
  );
  const line = (
    <Flex
      bg="services.background"
      sx={{
        height: ["100px", "300px"],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {imageUrl && <Text>________</Text>}
    </Flex>
  );
  return (
    <>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          background: "services.background",
        }}
      >
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
      <Flex
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "services.background",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            width: "1000px",
            gridTemplateColumns: ["1fr", "2fr 1fr 2fr"],
            backgroundColor: "services.background",
            padding: "40px 0px",
          }}
        >
          {imagePosition === "left" && image}

          {imagePosition === "left" && line}

          <Flex
            bg="services.background"
            sx={{
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {subhead && (
              <Text
                variant={subhead.variant}
                sx={{
                  textAlign: `${subhead.position}`,
                  width: "386px",
                }}
              >
                {subhead.body}
              </Text>
            )}
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
          </Flex>
          {imagePosition === "right" && line}
          {imagePosition === "right" && image}
        </Grid>
      </Flex>
    </>
  );
}

export default TestimonialsV1;
