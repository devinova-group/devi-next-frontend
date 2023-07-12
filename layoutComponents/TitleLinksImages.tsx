import { TitleLinksProp } from "@/interfaces/compInterfaces";
import Box from "@/library/Box";
import Text from "@/library/Text";
import React from "react";

function Images({ component, imgSrc }: any) {
  const imageUrl = imgSrc?.itemImg?.data?.attributes?.url;
  const itemPostition = component?.itemPostition;
  const noBg = component?.itemBackground;
  const itemsLayout = component?.itemsLayout;
  const itemTitle = imgSrc?.itemTitle;
  const itemImgAltText = imgSrc.itemImgAltText;
  const image =
    imageUrl && imageUrl
      ? `url(${imageUrl}) center no-repeat`
      : "services.invert";
  const vertical = `${
    itemsLayout && itemsLayout === "oneRows" ? "430px" : "248px"
  }`;
  const itemTop = `${
    (itemPostition && itemPostition === "topLeft") ||
    itemPostition === "topRight"
      ? 0
      : ""
  }`;
  const itemBottom = `${
    (itemPostition && itemPostition === "bottomLeft") ||
    itemPostition === "bottomRight"
      ? 0
      : ""
  }`;
  const itemLeft = `${
    (itemPostition && itemPostition === "bottomLeft") ||
    itemPostition === "topLeft"
      ? 0
      : ""
  }`;
  const itemRight = `${
    (itemPostition && itemPostition === "bottomRight") ||
    itemPostition === "topRight"
      ? 0
      : ""
  }`;

  return (
    <Box
      sx={{
        position: "relative",
        width: "340px",
        height: vertical,
        borderRadius: "8px",
        objectDit: "cover",
      }}
    >
      <Box
        title={itemImgAltText && itemImgAltText}
        sx={{
          position: "absolute",
          top: itemTop,
          bottom: itemBottom,

          width: "340px",
          height: "56px",
          background: `${noBg && noBg === true ? "services.background" : ""}`,
          borderRadius: `${
            itemTop && itemTop ? "8px 8px 0px 0px" : "0px 0px 8px 8px"
          }`,
          alignItems: "center",
          opacity: ".7",
        }}
      />
      {itemTitle && (
        <Text
          variant="Subhead"
          sx={{
            position: "absolute",
            margin: "15px",
            top: itemTop,
            bottom: itemBottom,
            left: itemLeft,
            right: itemRight,
            color: `${noBg && noBg === true ? "services.invert" : "white"}`,
          }}
        >
          {itemTitle}
        </Text>
      )}
      <Box
        sx={{
          borderRadius: "8px",
          background: image,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}

export default Images;
