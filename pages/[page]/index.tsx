import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getPages } from "@/interfaces/graphql/Query";
import Flex from "@/library/Flex";
import Designator from "@/layoutComponents/Designator";
import NotFound from "../404";
import Loading from "@/library/Loading";

export default function Home() {
  const { data, loading, error } = useQuery(getPages);
  const router = useRouter();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }

  const comps = data.pages.data.find(
    (strapiPage: any) => strapiPage.attributes.pagename == router.query.page
  );
  if (!comps) {
    return <NotFound />;
  }

  return (
    <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
      {comps.attributes.comps.map((item: any, i: number) => {
        return <Designator component={item} key={i} />;
      })}
    </Flex>
  );
}
