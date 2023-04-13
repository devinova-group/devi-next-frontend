import {gql, ApolloClient, InMemoryCache} from "@apollo/client";

export default function Home({data}: any) {
  console.log("data", data.comps);

  return (
    <>
      <div>
        {data.comps.map((item: any, i: number) => {
          return <div key={i}>{item.__typename}</div>;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  const {data} = await client.query({
    query: gql`
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
    `,
  });

  return {props: {data: data.page.data.attributes}};
}
