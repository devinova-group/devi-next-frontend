import React from "react";
import { useState } from "react";
import { Box, Flex } from "theme-ui";

import { BoxProps as AvatarPropsThemeUI } from "theme-ui";
import Heading from "./Heading";
import Image from "./Image";

export interface AvatarProps extends AvatarPropsThemeUI {
  src?: string;
  username?: string;
  variant?:
    | "notAvailable"
    | "busy"
    | "away"
    | "notdisturb"
    | "edit"
    | "active"
    | "default"
    | "noImage"
    | "error";
}

const Avatar = (props: AvatarProps) => {
  const [status, setStatus] = useState(true);
  const [clicked, setClick] = useState("");

  const allStatus = [
    { id: 1, value: "notAvailable" },
    { id: 2, value: "busy" },
    { id: 3, value: "away" },
    { id: 4, value: "notdisturb" },
    { id: 5, value: "edit" },
    { id: 6, value: "active" },
    { id: 7, value: "error" },
  ];
  const handleClick = (status: any) => {
    setClick(status);
    setStatus(true);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        variant={clicked ? `avatars.${clicked}` : `avatars.${props.variant}`}
      >
        <Image src={props.src} />
        <Heading as={"h6"} variant="quicksand" size="h6">
          {props.username}
        </Heading>
        <Box
          sx={{ position: "absolute" }}
          onClick={() => setStatus(!status)}
        ></Box>
      </Box>
      {!status &&
        allStatus.map((status) => (
          <Flex
            key={status.id}
            onClick={() => handleClick(status.value)}
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 30,
              width: 70,
              position: "relative",
            }}
          >
            <Box
              variant={`avatars.${status.value}`}
              sx={{
                background: "none",
                top: 0,
                left: 14,
                position: "absolute",
              }}
            >
              <Box />
            </Box>
          </Flex>
        ))}
    </Box>
  );
};

export default Avatar;
