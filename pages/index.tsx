import React from "react";
import { gql, useQuery } from "@apollo/client";
import Designator from "./components/Designator";
import Navigation from "./components/Navigation";

const QUERY = gql`
  query GetPage {
    navigation {
      data {
        attributes {
          navbar {
            ... on ComponentComponentLink {
              label
              href
            }
            ... on ComponentComponentDropDown {
              labeldropdown
              links {
                label
                href
              }
            }
          }
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
        }
      }
    }
    page(id: 1) {
      data {
        attributes {
          pagename
          comps {
            ... on ComponentBlocksHeroBanner {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }

              title
              imgPosition
              layout
              gradientHero
              paragraphHero
              buttonTitle
            }
            ... on ComponentBlocksTextHeader {
              title
              paragraph
              imagePosition
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentBlocksBanner {
              title
              gradient
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              imageMobile {
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
`;

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return null;
  }
  const comps = data?.page.data.attributes.comps;
  const nav = data?.navigation.data.attributes
  return (
    <>
     <Navigation nav={nav} /> 
      {comps &&
        comps?.map((item: any, i: number) => {
          return <Designator component={item} key={i} />;
        })}
    </>
  );
}
