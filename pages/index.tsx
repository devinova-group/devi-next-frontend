import { useQuery } from "@apollo/client";
import Flex from "@/library/Flex";
import Designator from "@/layoutComponents/Designator";
import { getPages } from "@/interfaces/graphql/Query";
import Loading from "@/library/Loading";

export default function Home() {
  const { data, loading, error } = useQuery(getPages);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }
  const comps = data?.pages.data.find(
    (strapiPage: any) => strapiPage.attributes.pagename == "index"
  );
  return (
    <>
      <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
        {comps &&
          comps.attributes.comps.map((item: any, i: number) => {
            return <Designator component={item} key={i} />;
          })}
      </Flex>
    </>
  );
}
