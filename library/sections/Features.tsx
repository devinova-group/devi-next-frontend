import {Flex, useColorMode, Image, Grid, Box} from "theme-ui";
import {card, featuresSectionProps} from "./sectionTypes";
import FeatureCard from "../FeatureCard";
import Text from "../Text";

const FeaturesSection = ({component}: featuresSectionProps) => {
  const [mode] = useColorMode();
  let bgVariable = "services.background";

  return (
    <Flex
      sx={{
        background: bgVariable,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 20,
        width: "100%",
      }}
    >
      <Box sx={{paddingY: "70px"}}>
        <Text variant="H5">{component.title}</Text>
      </Box>
      <Grid
        sx={{
          width: "100%",
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          placeItems: "center",
          rowGap: 25,
          columnGap: 0,
        }}
      >
        {component.cards.map((card: card, i: number) => {
          let cardSize = `${card.size === "large" ? "415px" : "315px"}`;
          return (
            <Grid
              key={i}
              sx={{
                width: "100%",
                height: "100%",
                gridTemplateColumns: `${
                  i % 2 ? `1fr ${cardSize} 2fr` : `2fr ${cardSize} 1fr`
                }`,
              }}
            >
              <Flex
                sx={{
                  gridColumn: "2/3",
                  flexDirection: "column",
                  maxWidth: "100%",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FeatureCard variant={card.variant} size={card.size}>
                  <Text variant="H6">{card.header}</Text>
                  <Image
                    src={card.img.data.attributes.url}
                    alt={card.header + "Image"}
                  />
                </FeatureCard>
                <Text>{card.body}</Text>
              </Flex>
            </Grid>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default FeaturesSection;
