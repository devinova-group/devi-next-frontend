import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import Image from "../Image";
import Text from "../Text";
import Button from "../Button";
import bgWhite from "../../pages/assets/images/bgWhite.png";
import bgBlack from "../../pages/assets/images/bgBlack.png";
import { useColorMode } from "theme-ui";

export interface HeroBannerProps {
  children?: React.ReactNode;
}

const HeroBanner = ({ children }: HeroBannerProps) => {
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

export interface ContentProps {
  title?: string;
  paragraph?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  imagePosition?: string;
  buttonTitle?: string;
  layout?: string;
  gradient?: boolean;
}
const Content = ({
  title,
  paragraph,
  imagePosition,
  imageUrl,
  buttonTitle,
  layout,
  gradient,
}: ContentProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const image = <Image sx={{ margin: "30px" }} src={imageUrl}></Image>;
  const mode =
    colorMode === "light"
      ? `url(${bgWhite.src}) no-repeat`
      : `url(${bgBlack.src}) no-repeat`;
  return (
    <Flex
      sx={{
        width: "100%",
        height: ["630px", "400px"],
        justifyContent: "center",
        alignItems: "center",
        flexDirection: ["column", "row"],
        gap: ["5%", "10%"],
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
          color: `${gradient ? "white" : "services.invert"}`,
        }}
      >
        <Text
          variant="H5"
          sx={{
            fontFamily: "Quicksand",
            fontSize: [4, 6],
          }}
        >
          {title}
        </Text>
        <Text
          variant="Body2"
          sx={{
            width: ["272px", "500px"],
            fontSize: [2, 3],
          }}
        >
          {paragraph}
        </Text>
        <Box
          sx={{
            button: {
              fontSize: [3, 4],
            },
          }}
        >
          {layout === "imageButton" && (
            <Button variant="default" colorvariant="information" size="large">
              {buttonTitle}
            </Button>
          )}
        </Box>
      </Flex>
      {layout === "actionButton" && (
        <Button variant="default" colorvariant="information" size="large">
          {buttonTitle}
        </Button>
      )}
      {layout === "imageButton" && imagePosition === "right" && image}
    </Flex>
  );
};
export default Object.assign(HeroBanner, { Content });
