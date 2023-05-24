import { gql, useQuery } from "@apollo/client";
import Flex from "@/library/Flex";
import Designator from "@/layoutComponents/Designator";
import Navigation from "../layoutComponents/Navigation";
import Footer from "@/library/Footer";

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
            __typename
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
            ... on ComponentBlocksTestimonialsV1 {
              titleV1 {
                body
                position
                variant
              }
              imgV1 {
                imagesPosition
                width
                height
                altText
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              subheadV1 {
                body
                position
                variant
              }
              paragraphV1 {
                body
                position
                variant
              }
            }
            ... on ComponentBlocksHeroBanner {
              bgHeroBanner {
                lightBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                darkBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              buttonHeroBanner {
                text
                color
                size
                variant
                destination
              }
              titleHeroBanner {
                body
                position
                variant
              }
              gradientHeroBanner
              layoutHeroBanner
              paragraphHeroBanner {
                body
                position
                variant
              }

              imgHeroBanner {
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                width
                height
                altText
                imagesPosition
              }
            }
            ... on ComponentBlocksTextHeader {
              bgTextSection {
                lightBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                darkBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              titleTextSection {
                body
                position
                variant
              }
              paragraphTextSection {
                body
                position
                variant
              }
              imgTextSection {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                imagesPosition
                height
                width
                altText
              }
            }
            ... on ComponentBlocksBanner {
              gradientTextBanner
              bgTextBanner {
                lightBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                darkBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              titleTextBanner {
                body
                position
                variant
              }
              imgTextBanner {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                imagesPosition
                height
                width
                altText
              }
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
