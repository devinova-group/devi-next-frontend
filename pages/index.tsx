import {gql, useQuery} from "@apollo/client";
import {Box} from "theme-ui";
import Text from "@/library/Text";

const QUERY = gql`
  query {
    page(id: 1) {
      data {
        attributes {
          comps {
            __typename
            ... on ComponentBlocksFeatures {
              cards {
                header
                body
              }
            }
            ... on ComponentBlocksSection {
              text {
                body
                position
                variant
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
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data.page.data.attributes.comps);

  const comps = data.page.data.attributes.comps;
  return (
    <Box>
      {comps.map((item: any, i: number) => {
        return (
          <Text key={i} variant="H2">
            {item.__typename}
          </Text>
        );
      })}
    </Box>
  );
}
