import React from "react";
import Navigation from "./components/Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
