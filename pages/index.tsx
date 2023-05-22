import { gql, useQuery } from "@apollo/client";
import Flex from "@/library/Flex";

import { useColorMode } from "theme-ui";
import Designator from "@/library/sections/Designator";
import Footer from "@/library/footer";
import Navigation from "./components/Navigation";

const QUERY = gql`
  query {
    navigation {
      data {
        attributes {
          logo {
            link
            logoDesktopLight {
              data {
                attributes {
                  url
                }
              }
            }
            logoMobileLight {
              data {
                attributes {
                  url
                }
              }
            }
            logoDesktopDark {
              data {
                attributes {
                  url
                }
              }
            }
            logoMobileDark {
              data {
                attributes {
                  url
                }
              }
            }
          }
          navbar {
            ... on ComponentComponentLink {
              label
              href
            }
            ... on ComponentComponentDropDown {
              labeldropdown
              link {
                label
                href
              }
            }
          }
        }
      }
    }
    page(id: 1) {
      data {
        attributes {
          comps {
            __typename
            ... on ComponentBlocksBanner {
              imageMobile {
                data {
                  attributes {
                    url
                  }
                }
              }
              gradient
              title
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentBlocksTextHeader {
              title

              photoPosition
              paragraph
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentBlocksHeroBanner {
              title
              buttonTitle
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              imagePosition
              layout
              gradientHero
              paragraphHero
            }
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
                destination
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
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }

  const comps = data.page.data.attributes.comps;
  const nav = data?.navigation.data.attributes;
  return (
    <>
      <Navigation nav={nav} />
      <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
        {comps.map((item: any, i: number) => {
          return <Designator component={item} key={i} />;
        })}
        <Footer />
      </Flex>
    </>
  );
}
