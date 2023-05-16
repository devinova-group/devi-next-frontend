/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Box, jsx } from "theme-ui";
interface Props {
  toggleAccordion?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Accordion = ({ toggleAccordion, children, onClick }: Props) => {
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    setHeight(toggleAccordion ? `40px` : "0px");
  }, [toggleAccordion]);
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
        maxHeight: height,
        overflow: "hidden",
        transition: "max-height 0.6s ease",
      }}
    >
      {children}
    </Box>
  );
};

export default Accordion;
