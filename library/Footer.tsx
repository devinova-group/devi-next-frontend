import * as React from "react";
import { Box, ThemeUIStyleObject, Image, useColorMode } from "theme-ui";
import Text from "./Text";
import { gql, useQuery } from "@apollo/client";

const mock = {
  title: "Gothenburg office",
};

const Footer = () => {
  const [mode] = useColorMode();
  const { data } = useQuery(gql`
    query {
      footer {
        data {
          attributes {
            email
            adress
            location
            number
            twitter {
              data {
                attributes {
                  url
                }
              }
            }
            instagram {
              data {
                attributes {
                  url
                }
              }
            }
            linkedin {
              data {
                attributes {
                  url
                }
              }
            }
            instaDark {
              data {
                attributes {
                  url
                }
              }
            }
            twitterDark {
              data {
                attributes {
                  url
                }
              }
            }
            linkedinDark {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  let footer = data?.footer.data.attributes;
  /*   console.log(data); */
  return (
    <Box sx={container}>
      <Box sx={Box1}>
        <Text
          variant="H6"
          sx={{
            display: "none",
            "@media screen and (max-width: 700px)": {
              display: "unset",
              marginBottom: "1rem",
            },
          }}
        >
          Get in touch
        </Text>
        <Text variant="H6">{mock.title}</Text>
        <br />
        <Text variant="Body1" sx={{ color: "modes.dark.text" }}>
          {footer?.adress}
        </Text>
        <Text variant="Body1">{footer?.location}</Text>
        <Text variant="Body1">{footer?.email}</Text>
        <Text variant="Body1">{footer?.number}</Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media screen and (max-width: 700px)": {
            alignItems: "center",
          },
        }}
      >
        <Box color="text" sx={{ marginTop: "2rem" }}></Box>
        <Box
          sx={{
            // marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            "@media screen and (max-width: 700px)": {
              marginTop: "2rem",
            },
          }}
          color="text"
        >
          <Text variant="Caption">People</Text>

          <Text variant="Caption">Data & Privacy</Text>

          <Text variant="Caption">Manage Cookies</Text>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Text variant="Caption" color="text">
            © 2023 All right reserved - Devinova Group AB
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          marginRight: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "@media screen and (max-width: 850px)": {
            marginRight: "1rem",
          },
          "@media screen and (max-width: 700px)": {
            marginTop: "3rem",
            marginRight: "0",
            alignItems: "center",
          },
        }}
      >
        <Text variant="Caption">
          Follow us on social media for regular updates.
        </Text>
        <Box
          color="text"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            marginTop: "2rem",
            alignItems: "center",
            justifyContent: "center",
            "@media screen and (max-width: 700px)": {
              marginBottom: "2rem",
            },
          }}
        >
          <Image
            src={
              mode === "dark"
                ? footer?.twitterDark.data.attributes.url
                : footer?.twitter.data.attributes.url
            }
          />
          <Image
            src={
              mode === "dark"
                ? footer?.instaDark.data.attributes.url
                : footer?.instagram.data.attributes.url
            }
          />
          <Image
            src={
              mode === "dark"
                ? footer?.linkedinDark.data.attributes.url
                : footer?.linkedin.data.attributes.url
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

const container: ThemeUIStyleObject = {
  height: "15rem",
  color: "text",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  bottom: "0",
  width: "100%",
  backgroundColor: "footer.footerBackground",
  "@media screen and (max-width: 700px)": {
    height: "35rem",
    flexDirection: "column",
    justifyContent: "unset",
  },
};
const Box1: ThemeUIStyleObject = {
  marginLeft: "4rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@media screen and (max-width: 850px)": {
    marginLeft: "1rem",
  },
  "@media screen and (max-width: 700px)": {
    marginTop: "3rem",
    marginLeft: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Footer;
