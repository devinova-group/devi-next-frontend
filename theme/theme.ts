import colors from "./colors";
import text from "./text";
import buttons from "./buttons";
import cards from "./cards";
import shadows from "./shadows";
import borders from "./borders";
import links from "./links";
import grids from "./grids";
import flex from "./flex";
import heading from "./heading";
import modal from "./modal";
import tooltip from "./tooltip";
import box from "./box";
import forms from "./forms";

export const theme = {
  space: [
    0, 2, 4, 8, 12, 14, 16, 18, 21, 24, 28, 32, 36, 40, 42, 46, 48, 52, 56, 60,
    64, 72, 78, 80, 96, 102,
  ],
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 60, 72, 96],
  fonts: ["OpenSans", "Quicksand"],
  fontWeights: [300, 400, 500, 600, 700, 800],
  lineHeights: [0, "24px", "32px", "48px", "60px", "72px", "96px"],
  letterSpacings: [1, 2, 2.5, 3, 3.5],
  zIndices: [0, 250, 500, 1000, 1500],
  breakpoints: ["600px"],
  colors,
  text,
  box,
  buttons,
  cards,
  shadows,
  borders,
  links,
  grids,
  flex,
  heading,
  modal,
  tooltip,
  forms,
};

export default theme;
