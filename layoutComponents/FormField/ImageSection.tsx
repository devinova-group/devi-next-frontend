import Box from "@/library/Box";
import Flex from "@/library/Flex";
import Image from "@/library/Image";
import Text from "@/library/Text";
import React from "react";

function ImageSection({ component }: any) {
  const title = component?.formTitle;
  const subHead = component?.formSubhead;
  const paragraph = component?.formParagraph;
  const imageUrl = component?.formImage?.image?.data?.attributes?.url;
  return (
    <Flex
      sx={{
        width: ["260px", "500px"],
        flexDirection: "column",
        gap: "20px",
        color: "services.invert",
        alignItems: "center",
      }}
    >
      {title && (
        <Text
          variant={title.variant}
          sx={{
            fontFamily: "Quicksand",
            alignSelf: `${title.position}`,
          }}
        >
          {title.body}
        </Text>
      )}
      {subHead && (
        <Text
          variant={subHead.variant}
          sx={{
            fontFamily: "Quicksand",
            alignSelf: `${subHead.position}`,
          }}
        >
          {subHead.body}
        </Text>
      )}
      {paragraph && (
        <Text
          variant={paragraph.variant}
          sx={{
            width: ["260px", "500px"],
            fontFamily: "Quicksand",
            alignSelf: `${paragraph.position}`,
          }}
        >
          {paragraph.body}
        </Text>
      )}
      {imageUrl && (
        <Box sx={{ width: ["260px", "500px"] }}>
          <Image src={imageUrl} />
        </Box>
      )}
    </Flex>
  );
}

export default ImageSection;
