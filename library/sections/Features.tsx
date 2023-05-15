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
        }}
      >
        {component.cards.map((card: card, i: number) => {
          return (
            <Flex
              key={i}
              sx={{width: "100%", height: "100%", justifyContent: "center"}}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  maxWidth: `${card.size === "large" ? "415px" : "315px"}`,
                  gap: 10,
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
            </Flex>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default FeaturesSection;
