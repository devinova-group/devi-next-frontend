import { ListSectionProp } from "@/interfaces/compTypes";
import Flex from "@/library/Flex";
import Image from "@/library/Image";
import Text from "@/library/Text";
import React from "react";

function ListItem({ item }: any) {
  const title = item?.listTitle;
  const paragraph = item?.listparagraph;
  const imageUrl = item?.listImage?.data?.attributes?.url;
  const titlePosition = item?.listTitlePosition;
  const paragraphPosition = item?.listParagraphPosition;
  const testing = `${paragraphPosition}` as "center";
  console.log(titlePosition);
  return (
    <Flex
      sx={{
        width: "300px",
        /*   alignItems: "center", */
        /*  justifyContent: "center", */
        flexDirection: "column",
        gap: "20px",
        margin: "30px",
      }}
    >
      {imageUrl && (
        <Image src={imageUrl} width={"100px"} sx={{ alignSelf: "center" }} />
      )}
      {title && (
        <Text variant="H6" sx={{ alignSelf: `${titlePosition}` }}>
          {title}
        </Text>
      )}
      {paragraph && (
        <Text variant="Body1" sx={{ textAlign: testing }}>
          {paragraph}
        </Text>
      )}
    </Flex>
  );
}

export default ListItem;
