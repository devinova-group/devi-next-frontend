import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import Image from "../Image";
import Text from "../Text";

export interface TextSectionProps {
  children?: React.ReactNode;
}

const TextSection = ({ children }: TextSectionProps) => {
  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Flex>
  );
};

export interface TextSectionProps {
  title?: string;
  image?: string;
  gradient?: string;
  imageMobile?: string;
  children?: React.ReactNode;
}

const Banner = ({
  title,
  image,
  gradient,
  imageMobile,
  children,
}: TextSectionProps) => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: `${image! ? "auto" : "346px"}`,
        backgroundColor: `${
          image || imageMobile || gradient ? "" : "services.invert"
        }`,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: `${
          gradient || image || imageMobile ? "white" : "services.background"
        }`,
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
            width: "100%",
          }}
          src={image}
        />
      )}
      {imageMobile ? (
        <Image
          sx={{
            display: ["flex", "none"],
            width: "100%",
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
        ></Box>
      )}

      {title ? (
        <Text
          sx={{
            position: "absolute",
            fontSize: [6, 9],
            fontFamily: "Quicksand",
          }}
        >
          {title}
        </Text>
      ) : (
        <Box
          sx={{
            position: "absolute",
            fontFamily: "Quicksand",
          }}
        >
          {children}
        </Box>
      )}
    </Flex>
  );
};
export interface TextHeader {
  title?: string;
  paragraph?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  imagePosition?: string;
}
const TextHeader = ({
  title,
  paragraph,
  children,
  imagePosition,
  imageUrl,
}: TextHeader) => {
  const image = <Image sx={{ margin: "30px" }} src={imageUrl}></Image>;
  return (
    <Flex
      sx={{
        width: "100%",
        height: "600px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: ["column", "row"],
        backgroundColor: "services.background",
        gap: "5%",
        img: { width: ["90%", "500px"] },
      }}
    >
      {imagePosition === "imageLeft" && image}
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {imagePosition === "imageTop" && image}
        <Text
          variant="H5"
          sx={{
            color: "services.invert",
            fontFamily: "Quicksand",
            fontSize: 6,
          }}
        >
          {title}
        </Text>
        <Text
          variant="Body1"
          sx={{
            width: ["90%", "500px"],
            marginTop: 12,
            color: "services.invert",
            fontSize: [2, 3],
          }}
        >
          {paragraph}
        </Text>
        {imagePosition === "imageBottom" && image}
      </Flex>
      {imagePosition === "imageRight" && image}
    </Flex>
  );
};
export default Object.assign(TextSection, { Banner, TextHeader });
