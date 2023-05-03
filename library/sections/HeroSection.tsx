import {Flex, Grid, useColorMode, Image} from "theme-ui";
import {buttonComponent, heroSectionProps, textComponent} from "./sectionTypes";
import Text from "../Text";
import Button from "../Button";
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const HeroSection = ({component}: heroSectionProps) => {
  const [mode] = useColorMode();
  let bgVariable = "background";
  if (
    component.darkBackgroundImage.data != null ||
    component.backgroundImage.data != null
  ) {
    bgVariable =
      mode === "dark"
        ? `url(${component.darkBackgroundImage.data.attributes.url})`
        : `url(${component.backgroundImage.data.attributes.url})`;
  }

  return (
    <Grid
      /** Main Section Container */
      variant={`content.section.${component.imagesPosition ?? "right"}.${
        component.mobileImagesPosition ?? "top"
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
            objectFit: "none",
            "@media screen and (min-width: 600px)": {
              height: "660px",
            },
          }}
          src={component.images.data.attributes.url}
          alt={component.__typename}
        />
      </Flex>
      {/* <Flex
        sx={{
          gridArea: "img",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          "@media screen and (max-width: 600px)": {
            width: "90%",
          },
        }}
      >
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            autoplay: true,
            pauseOnHover: true,
            arrows: false,
          }}
        >
          <SplideTrack>
            {component.images.data.map((image: any) => {
              return (
                <SplideSlide
                  key={image.attributes.url}
                  style={{display: "flex", justifyContent: "center"}}
                >
                  <Image
                    src={image.attributes.url}
                    alt={component.__typename}
                  />
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </Splide>
      </Flex> */}
    </Grid>
  );
};

export default HeroSection;
