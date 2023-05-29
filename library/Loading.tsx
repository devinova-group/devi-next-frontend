import React from "react";
import { Spinner } from "theme-ui";
import Flex from "./Flex";
/* import { ReactComponent as Spin }  from '../icons/loader.svg' */

function Loading() {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Spinner variant="spinner.default" />
    </Flex>
  );
}

export default Loading;
