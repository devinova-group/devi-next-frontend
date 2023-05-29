import React from "react";
import { useQuery } from "@apollo/client";
import { getPages } from "@/interfaces/graphql/Query";
import Navigation from "@/layoutComponents/Navigation";
import Footer from "@/library/Footer";
import Loading from "@/library/Loading";

function Layout({ children }: any) {
  const { data, loading, error } = useQuery(getPages);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }
  return (
    <>
      <Navigation data={data} />
      <main>{children}</main>
      <Footer data={data} />
    </>
  );
}

export default Layout;
