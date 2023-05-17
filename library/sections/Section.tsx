import {Flex, Grid, useColorMode, Image} from "theme-ui";
import {buttonComponent, sectionProps, textComponent} from "./sectionTypes";
import Text from "../Text";
import Button from "../Button";
import {useRouter} from "next/router";

const Section = ({component}: sectionProps) => {
  const [mode] = useColorMode();
  const router = useRouter();
  let bgVariable = "background";
  if (
    component.darkBackgroundImg.data != null ||
    component.backgroundImg.data != null
  ) {
    bgVariable =
      mode === "dark"
        ? `url(${component.darkBackgroundImg.data.attributes.url})`
        : `url(${component.backgroundImg.data.attributes.url})`;
  }

  return (
    <Grid
      /** Main Section Container */
      variant={`content.section.${component.imgPosition ?? "right"}.${
        component.mobileImgPosition ?? "top"
      }`}
      sx={{
        background: bgVariable,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        /** Container holding texts and buttons */
        sx={{
          placeItems: "center",
          gridArea: "left",
          maxWidth: "440px",
          "@media screen and (max-width: 600px)": {
            width: "90%",
          },
        }}
      >
        <Flex
          /** Text Container */
          sx={{
            flexDirection: "column",
            gap: component.gap,
            marginY: component.gap,
          }}
        >
          {component.text.map((item: textComponent, i: number) => {
            return (
              <Text key={i} variant={item.variant}>
                {item.body}
              </Text>
            );
          })}
          {component.buttons ? (
            <Flex
              /** Button Container */
              sx={{
                gap: component.gap,
                "@media screen and (max-width: 600px)": {
                  flexDirection: "column",
                },
              }}
            >
              {component.buttons.map((button: buttonComponent, i: number) => {
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
        </Flex>
      </Grid>
      <Flex
        sx={{
          gridArea: "img",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          sx={{
            objectFit: `${component.objectFit ?? "cover"}`,
            "@media screen and (min-width: 600px)": {
              height: `${component.objectFit === "cover" ? "660px" : ""}`,
            },
          }}
          src={component.img.data.attributes.url}
          alt={component.__typename}
        />
      </Flex>
    </Grid>
  );
};

export default Section;
