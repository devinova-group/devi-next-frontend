import {Flex, useColorMode, Image, Grid} from "theme-ui";
import {card, featuresSectionProps} from "./sectionTypes";
import Card from "../Cards";
import Text from "../Text";

const FeaturesSection = ({component}: featuresSectionProps) => {
  const [mode] = useColorMode();
  let bgVariable = "background";

  return (
    <Flex
      sx={{
        background: bgVariable,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        flexDirection: "column",
        alignItems: "center",
        height: 1460,
        width: "100%",
      }}
    >
      <Text variant="H5">{component.title}</Text>
      <Grid
        sx={{
          width: "100%",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
        }}
      >
        {component.cards.map((card: card, i: number) => {
          return (
            <Flex
              key={i}
              sx={{
                flexDirection: "column",
                width: `${card.size === "large" ? "415px" : "315px"}`,
                gap: 10,
              }}
            >
              <Card variant={card.variant} size={card.size}>
                <Text variant="H6">{card.header}</Text>
                <Image
                  src={card.img.data.attributes.url}
                  alt={card.header + "Image"}
                />
              </Card>
              <Text>{card.body}</Text>
            </Flex>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default FeaturesSection;
