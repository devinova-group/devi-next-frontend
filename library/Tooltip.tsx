import {keyframes} from "@emotion/react";
import React from "react";
import {MutableRefObject, ReactNode, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {Box, BoxProps} from "theme-ui";

interface tipProps {
  children: ReactNode;
  tip: ReactNode;
  arrow?: boolean;
  follow?: boolean;
  placement?: "top" | "bottom" | "right" | "left";
  fade?: boolean;
  delay?: number;
}

interface portalProps {
  children: ReactNode;
  coords: {x?: number; y?: number};
  arrow?: boolean;
  follow?: boolean;
  placement?: "top" | "bottom" | "right" | "left";
  boxInfo?: MutableRefObject<HTMLDivElement | null | undefined>;
  visible: boolean;
  fade?: boolean;
  delay?: number;
}

const Tooltip = (
  {children, tip, arrow, follow, placement, fade, delay}: tipProps,
  props: BoxProps
) => {
  const [coords, setCoords] = useState<{y?: number; x?: number}>({});
  const [isOn, setOn] = useState(false);

  const hoverBox = useRef<HTMLDivElement | null>();

  return (
    <>
      {follow ? (
        <Box
          sx={{
            width: "fit-content",
            height: "fit-content",
          }}
          onPointerEnter={() => {
            setOn(!isOn);
          }}
          onPointerMove={(e) => {
            setCoords({
              x: e.pageX,
              y: e.pageY,
            });
          }}
          onPointerLeave={() => {
            setOn(!isOn);
          }}
          {...props}
        >
          {children}
        </Box>
      ) : (
        <Box
          sx={{
            width: "fit-content",
            height: "fit-content",
          }}
          ref={hoverBox}
          onPointerEnter={() => {
            setOn(!isOn);
          }}
          onPointerLeave={() => {
            setOn(!isOn);
          }}
          {...props}
        >
          {children}
        </Box>
      )}

      <ToolTipPortal
        coords={coords}
        arrow={arrow}
        follow={follow}
        placement={placement}
        boxInfo={hoverBox}
        visible={isOn}
        fade={fade}
        delay={delay}
      >
        {tip}
      </ToolTipPortal>
    </>
  );
};

const fadeIn = keyframes({from: {opacity: 0}, to: {opacity: 1}});
const fadeOut = keyframes({from: {opacity: 1}, to: {opacity: 0}});

const ToolTipPortal = ({
  children,
  coords,
  arrow,
  follow,
  placement,
  boxInfo,
  visible,
  fade,
  delay,
}: portalProps) => {
  let x;
  let y;
  let transVar;

  const ToolTipBox = useRef<HTMLDivElement | null>(null);

  const left = boxInfo?.current?.offsetLeft || 0;
  const width = boxInfo?.current?.offsetWidth || 0;
  const top = boxInfo?.current?.offsetTop || 0;
  const height = boxInfo?.current?.offsetHeight || 0;
  const tipWidth = ToolTipBox.current?.offsetWidth || 0;
  const tipHeight = ToolTipBox.current?.offsetHeight || 0;
  const spacing = 12;
  let mt = 0;

  if (follow) {
    x = coords.x;
    y = coords.y;
    transVar = "translateX(-50%)";
    mt = 8;
  } else {
    switch (placement) {
      case "top":
        x = left + width / 2;
        y = top;
        transVar = `translate(-50%, -${tipHeight + spacing}px)`;

        break;
      case "bottom":
        x = left + width / 2;
        y = top + height;
        transVar = `translate(-50%, ${spacing}px)`;

        break;
      case "right":
        x = left + width;
        y = top + height / 2;
        transVar = `translate(${spacing}px, -${tipHeight / 2}px)`;

        break;
      case "left":
        x = left;
        y = top + height / 2;
        transVar = `translate(-${tipWidth + spacing}px, -${tipHeight / 2}px)`;

        break;

      default:
        break;
    }
  }

  return ReactDOM.createPortal(
    <Box
      variant={`tooltip.${placement ? placement : "bottom"}.${
        arrow ? "arrow" : "primary"
      }`}
      className="tooltip"
      ref={ToolTipBox}
      sx={{
        marginTop: mt,
        position: "absolute",
        top: y,
        left: x,
        transform: transVar,
        visibility: `${visible ? "visible" : "hidden"}`,
        transition: `${
          fade ? `visibility ${delay ? delay / 1000 + "s" : "2s"}` : ""
        }`,
        animation: `${fade && visible ? fadeIn : fadeOut} ${
          delay ? delay / 1000 + "s" : "2s"
        }`,
      }}
    >
      {children}
    </Box>,
    document.getElementById("portal")!
  );
};

export default Tooltip;
