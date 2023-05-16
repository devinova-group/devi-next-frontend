import {gql, useQuery} from "@apollo/client";
import {Flex, useColorMode} from "theme-ui";
import Designator from "@/library/sections/Designator";
import {useRouter} from "next/router";

const QUERY = gql`
  query {
    pages {
      data {
        attributes {
          pagename
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
  const {data, loading, error} = useQuery(QUERY);
  const [colorMode, setColorMode] = useColorMode();
  const router = useRouter();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }

  const comps = data.pages.data.find(
    (strapiPage: any) => strapiPage.attributes.pagename == router.query.page
  );

  if (!comps) {
    return <Flex>404</Flex>;
  }

  return (
    <Flex sx={{alignItems: "center", flexDirection: "column"}}>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button>
      {comps.attributes.comps.map((item: any, i: number) => {
        return <Designator component={item} key={i} />;
      })}
    </Flex>
  );
}
