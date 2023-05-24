import Box from "@/library/Box";
import Flex from "@/library/Flex";
import Grid from "@/library/Grid";
import Text from "@/library/Text";
import React from "react";
import imageOne from "./ImageH.png";
import imageTwo from "./ImageHolder.png";
import Image from "@/library/Image";

function TestimonialsV1({ component }: any) {
  const title = component?.titleV1;
  const subhead = component?.subheadV1;
  const paragraph = component?.paragraphV1;
  /*   const imageUrl = component.imgV1.image.data?.attributes.url;
  const imagePosition = component.imgHeroBanner?.imagesPosition; */
  /*   console.log(component); */
  const text = component.subheadV1.map((item: any) => <Text>{item.body}</Text>);
  return (
    <>
      <Flex
        sx={{ alignItems: "center", justifyContent: "center", margin: "50px" }}
      >
        <Text>{title.body}</Text>
      </Flex>
      <Grid
        sx={{
          gridTemplateColumns: ["1fr", "2fr 1fr 2fr"],
        }}
      >
        <Flex
          bg="blue"
          sx={{
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*     <Image src={`${img}`} /> */}
        </Flex>
        <Flex
          bg="blue"
          sx={{
            height: ["100px", "300px"],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>________</Text>
        </Flex>

        {component &&
          component.paragraphV1.map((item: any) => {
            return <Text>{item.body}</Text>;
          })}
        <Box>{text}</Box>
        <Flex
          bg="blue"
          sx={{
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Text>{paragraph.body}</Text>
        </Flex>
        <Flex
          bg="blue"
          sx={{
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Text>SubText</Text>
          <Text>
            We are committed to providing lifelong learning and growth
            opportunities to our team members. Whether you want to advance in
            your career or explore new areas of expertise, we are here to
            support you every step of the way..
          </Text>
        </Flex>
        <Flex
          bg="blue"
          sx={{
            height: ["100px", "300px"],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>________</Text>
        </Flex>
        <Flex
          bg="blue"
          sx={{
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*     <Image src={`${img}`} /> */}
        </Flex>
      </Grid>
    </>
  );
}

export default TestimonialsV1;

/*  <Flex
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        gap: "100px",
      }}
    >
      <Text>Title</Text>
      <Flex sx={{ gap: "5%" }}>
        <Flex
          sx={{
            display: ["none", "flex"],
            width: "300px",
            backgroundColor: "black",
          }}
        />
        <Text sx={{ display: ["none", "flex"] }}>________</Text>
        <Flex
          sx={{
            width: "300px",

            gap: "30px",
            flexDirection: "column",
          }}
        >
          <Text>Subhead</Text>
          <Text>
            We are committed to providing lifelong learning and growth
            opportunities to our team members. Whether you want to advance in
            your career or explore new areas of expertise, we are here to
            support you every step of the way..
          </Text>
        </Flex>
      </Flex>
      <Flex sx={{ gap: "5%" }}>
        <Flex
          sx={{
            width: "300px",

            gap: "30px",
            flexDirection: "column",
          }}
        >
          <Text>Subhead</Text>
          <Text>
            We are committed to providing lifelong learning and growth
            opportunities to our team members. Whether you want to advance in
            your career or explore new areas of expertise, we are here to
            support you every step of the way..
          </Text>
        </Flex>
        <Text>________</Text>
        <Box sx={{ width: "300px", backgroundColor: "black" }}></Box>
      </Flex>
    </Flex> */
