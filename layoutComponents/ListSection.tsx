import Grid from "@/library/Grid";
import Text from "@/library/Text";
import React from "react";
import ListItem from "./ListItem";
import Flex from "@/library/Flex";
import { ListSectionProp } from "@/interfaces/compInterfaces";

function ListSection({ component }: ListSectionProp) {
  const title = component?.listTitle;
  const subhead = component?.listSubhead;
  const titleSubhead = component?.listSubheadTwo;
  const listBody = component?.listBody;
  const listItems = component?.listItem;

  return (
    <Flex
      sx={{
        width: "100%",
        flexDirection: "column",
        backgroundColor: "services.background",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        gap: "20px",
      }}
    >
      {title && (
        <Text
          variant={title.variant}
          sx={{ color: "services.invert", alignSelf: `${title.position}` }}
        >
          {title.body}
        </Text>
      )}
      {subhead && (
        <Text
          variant={subhead.variant}
          sx={{ alignSelf: `${subhead.position}` }}
        >
          {subhead.body}
        </Text>
      )}
      <Grid
        columns={[1, 3]}
        sx={{
          width: "1160px",
          height: ["", "700px"],
          backgroundColor: "services.background",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {listItems &&
          listItems.map((item: any, i: number) => (
            <ListItem key={i} item={item} />
          ))}
      </Grid>
      {titleSubhead && (
        <Text
          variant={titleSubhead.variant}
          sx={{
            width: ["210px", "600px"],
            alignSelf: `${titleSubhead.position}`,
            color: "neutral.0",
          }}
        >
          {titleSubhead.body}
        </Text>
      )}
      {listBody && (
        <Text
          variant={listBody.variant}
          sx={{ color: "services.invert", alignSelf: `${listBody.position}` }}
        >
          {listBody.body}
        </Text>
      )}
    </Flex>
  );
}

export default ListSection;
