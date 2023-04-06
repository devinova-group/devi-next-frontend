import {gql, ApolloClient, InMemoryCache} from "@apollo/client";

export default function Home({data}: any) {
  console.log("data", data);

  return (
    <>
      <div>Hello world</div>
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
              }
            }
          }
        }
      }
    `,
  });

  return {props: {data: data.page.data.attributes}};
}
