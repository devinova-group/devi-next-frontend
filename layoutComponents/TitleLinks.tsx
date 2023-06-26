import Flex from "@/library/Flex";
import React from "react";
import Images from "./TitleLinksImages";
import Grid from "@/library/Grid";
import Box from "@/library/Box";
import Text from "@/library/Text";
import { useColorMode } from "theme-ui";
import { TitleLinksProp } from "@/interfaces/compTypes";

function TitleLinks({ component }: any) {
  const [colorMode] = useColorMode();
  const titleLinkItem = component?.titleLinkItem;
  const titleLinkTitle = component?.titleLinkTitle;
  const lightBG = component?.titleLinkBG?.lightBackground?.data?.attributes.url;
  const darkBG = component?.titleLinkBG?.darkBackground?.data?.attributes.url;

  const mode =
    colorMode === "light"
      ? `url(${lightBG}) center no-repeat`
      : `url(${darkBG}) center repeat`;
  return (
    <Flex
      sx={{
        width: "100%",
        minHeight: "1024px",
        paddingBottom: "50px",
        alignItems: "center",
        justifyContent: "center",
        background: `${lightBG ? `${mode}` : "services.invert"}`,
        flexDirection: "column",
        backgroundSize: "cover",
      }}
    >
      {titleLinkTitle && (
        <Text
          variant={titleLinkTitle.variant}
          sx={{
            color: `${lightBG ? "white" : "services.background"}`,
            margin: "80px 0px",
            alignSelf: `${titleLinkTitle.position}`,
          }}
        >
          {titleLinkTitle.body}
        </Text>
      )}
      <Grid
        gap={20}
        columns={[1, 2, 3]}
        sx={{
          width: ["", "", "1150px"],
          margin: "20px",
        }}
      >
        {titleLinkItem &&
          titleLinkItem.map((item: any, i: number) => (
            <Images key={i} imgSrc={item} component={component} />
          ))}
      </Grid>
    </Flex>
  );
}

export default TitleLinks;
