import Link from "next/link";
import {Box, Image, useColorMode} from "theme-ui";
import {gql, useQuery} from "@apollo/client";
import Text from "../library/Text";
import Button from "@/library/Button";
import {useRouter} from "next/router";

const NotFound = () => {
  const router = useRouter();
  const [mode] = useColorMode();
  const {data} = useQuery(gql`
    query {
      notfound {
        data {
          attributes {
            warningHeader
            warningInfo
            image {
              data {
                attributes {
                  url
                }
              }
            }
            imageLight {
              data {
                attributes {
                  url
                }
              }
            }
            button {
              text
              color
              size
              variant
            }
          }
        }
      }
    }
  `);
  let notfound = data?.notfound.data.attributes;
  console.log(data);

  return (
    <Box
      sx={{
        display: "flex",
        background: "notFound.notFoundBgr",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        "@media screen and (max-width: 700px)": {},
      }}
    >
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "6rem",
          width: "auto",
          "@media screen and (max-width: 645px)": {
            marginLeft: "2rem",
            marginRight: "2rem",
          },
        }}
      >
        <Image
          src={
            mode === "dark"
              ? notfound?.image.data.attributes.url
              : notfound?.imageLight.data.attributes.url
          }
          alt="404"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
          flexDirection: "column",
        }}
      >
        <Text
          variant="H4"
          sx={{
            color: "text",
            "@media screen and (max-width: 700px)": {
              fontSize: "2rem",
              marginLeft: "2rem",
              marginRight: "2rem",
            },
          }}
        >
          {notfound?.warningHeader}
        </Text>
        <Text
          variant="Body1"
          sx={{
            color: "text",
            width: "29rem",
            textAlign: "center",
            marginTop: "1rem",
            "@media screen and (max-width: 700px)": {
              width: "auto",
              marginLeft: "2rem",
              marginRight: "2rem",
            },
          }}
        >
          {notfound?.warningInfo}
        </Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
          gap: "1rem",
          "@media screen and (max-width: 700px)": {
            flexDirection: "column",
          },
        }}
      ></Box>
    </Box>
  );
};

export default NotFound;
