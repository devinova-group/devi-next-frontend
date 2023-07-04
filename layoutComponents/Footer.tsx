import React from "react";
import { useColorMode } from "theme-ui";
import Text from "../library/Text";
import Flex from "@/library/Flex";
import Box from "@/library/Box";
import Image from "@/library/Image";

const Footer = ({ data }: any) => {
  const [colorMode] = useColorMode();
  const footer = data?.footer?.data?.attributes;
  const logo = footer?.footerLogo;
  const logoLight = logo?.logoMobileLight?.data?.attributes?.url;
  const logoDark = logo?.logoMobileDark?.data?.attributes?.url;
  const social = footer?.footerSocial;
  const mode = colorMode === "light" ? logoDark : logoLight;

  return (
    <>
      <Flex
        sx={{
          width: "100%",
          height: ["620px", "275px"],
          backgroundColor: "footer.footerBackground",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            width: "90%",
            justifyContent: ["center", "space-between"],
            flexDirection: ["column", "row"],
            gap: "30px",
          }}
        >
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: ["center", "start"],
              flexDirection: "column",
              paddingLeft: ["0px", "50px"],
              h6: {
                color: "services.invert",
              },
              p: {
                color: "services.invert",
              },
            }}
          >
            <Text
              variant="H6"
              sx={{
                display: ["", "none"],
                marginBottom: "15px",
              }}
            >
              Get in touch
            </Text>
            <Text variant="H6">{footer?.locationTitle}</Text>
            <Text variant="Body1">{footer?.adress}</Text>
            <Text variant="Body1">{footer?.postNummerCity}</Text>
            <Text variant="Body1">{footer?.email}</Text>
            <Text variant="Body1">{footer?.number}</Text>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Image sx={{ width: ["75px", "54px"] }} src={mode && mode} />
            <Text variant="Caption" sx={{ color: "services.invert" }}>
              {footer?.infoText}
            </Text>
            <Text variant="Caption" sx={{ color: "neutral.0" }}>
              {footer?.copyright}
            </Text>
          </Flex>
          <Flex
            sx={{
              paddingRight: ["0px", "50px"],
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              padding: "30px",
            }}
          >
            <Text variant="Caption" sx={{ color: "services.invert" }}>
              {footer?.socialTitle}
            </Text>
            <Flex
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              {social &&
                social?.map((item: any, i: number) => {
                  console.log(item);
                  const modeSocial =
                    colorMode === "light"
                      ? item?.imageDark?.data?.attributes?.url
                      : item?.imageLight?.data?.attributes?.url;
                  return <Image key={i} width="22px" src={modeSocial} />;
                })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
