import { Box, Flex, Image, useColorMode } from "theme-ui";
import { gql, useQuery } from "@apollo/client";
import Text from "../library/Text";
import Button from "@/library/Button";
import { useRouter } from "next/router";
import { buttonComponent } from "@/library/sections/sectionTypes";

const QUERY = gql`
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
`;

const NotFound = () => {
  const { data, loading, error } = useQuery(QUERY);
  const router = useRouter();
  const [mode] = useColorMode();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }

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
          marginBottom: "5rem",
          gap: "1rem",
          "@media screen and (max-width: 700px)": {
            flexDirection: "column",
          },
        }}
      >
        {notfound?.button ? (
          <Flex
            sx={{
              gap: "1rem",
              "@media screen and (max-width: 700px)": {
                flexDirection: "column",
              },
            }}
          >
            {notfound.button.map((button: buttonComponent, i: number) => {
              return (
                <Button
                  key={i}
                  variant={button.variant}
                  size={button.size}
                  colorVariant={button.color}
                  onClick={() => {
                    router.push(button.destination ?? "/");
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default NotFound;
