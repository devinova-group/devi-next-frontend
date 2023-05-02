import {gql, useQuery} from "@apollo/client";
import {Card, Flex, useColorMode} from "theme-ui";
import Designator from "@/library/sections/Designator";
import HeroSection from "@/library/sections/HeroSection";

const QUERY = gql`
  query {
    page(id: 1) {
      data {
        attributes {
          comps {
            __typename
            ... on ComponentBlocksSection {
              text {
                body
                position
                variant
              }
              objectFit
              imgPosition
              mobileImgPosition
              gap
              img {
                data {
                  attributes {
                    url
                  }
                }
              }
              backgroundImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              darkBackgroundImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              buttons {
                text
                color
                size
                variant
              }
            }
            ... on ComponentBlocksHeroHeader {
              text {
                body
                position
                variant
              }
              imagesPosition
              mobileImagesPosition
              gap
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
              backgroundImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              darkBackgroundImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              buttons {
                text
                color
                size
                variant
              }
            }
            ... on ComponentBlocksFeatures {
              title
              cards {
                variant
                size
                header
                body
                img {
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
      }
    }
  }
`;

export default function Home() {
  const {data, loading, error} = useQuery(QUERY);
  const [colorMode, setColorMode] = useColorMode();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }

  const comps = data.page.data.attributes.comps;
  console.log("Data", data);
  console.log("comps", comps);

  return (
    <Flex sx={{alignItems: "center", flexDirection: "column"}}>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button>
      {comps.map((item: any, i: number) => {
        return <Designator component={item} key={i} />;
      })}
    </Flex>
  );
}
